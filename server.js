import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { Resend } from "resend";
import { render } from "@react-email/render";
import React from "react";
import Welcomeemail from "./emails/Welcomeemail.js";
import AutoReply from "./emails/AutoReply.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = "contact@galiavkal.resend.app";

// Rate limiter
const contactLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 3,
  handler: (req, res) => {
    return res.status(429).json({
      success: false,
      error: "Too many requests, please try again later.",
    });
  },
});

// Contact route
app.post("/contact", contactLimiter, async (req, res) => {
  const { name, email, phone, business, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Email to website owner
    await resend.emails.send({
      from:`Website Contact <${FROM_EMAIL}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Message from ${name}`,
      react: Welcomeemail({
        name,
        email,
        phone,
        businessWebsite: business,
        message,
      }),
    });

    // Auto Reply

    await resend.emails.send({
      from:  `Website Contact <${FROM_EMAIL}>`,
      to: email,
      subject: "We've received your message!",
      react: AutoReply({ name }),  
    });

    return res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));