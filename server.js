import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { Resend } from "resend";
import { render } from "@react-email/render";
import Welcomeemail from "./emails/Welcomeemail.jsx";
import AutoReply from "./emails/AutoReply.jsx";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const html = render(
      <Welcomeemail
        name={name}
        email={email}
        phone={phone}
        businessWebsite={business}
        message={message}
      />
    );

    await resend.emails.send({
        from: "Website Contact <noreply@yourdomain.com>",
        to: process.env.GMAIL_USER, // your inbox
        subject: `New Contact Form Message from ${name}`,
        html: Html,
      });
  
      // Send auto-reply to user
      const autoReplyHtml = render(
        <AutoReply name={name} />
      );
  
      await resend.emails.send({
        from: "Website Contact <noreply@yourdomain.com>",
        to: email, // sender
        subject: "Thanks for contacting us!",
        html: autoReplyHtml,
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
