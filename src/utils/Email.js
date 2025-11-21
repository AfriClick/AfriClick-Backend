import express from "express";
import { Resend } from "resend";
import { render } from "@react-email/render";
import Welcomeemail from "../react-email-starter/emails/Welcomeemail.jsx";

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, business, message } = req.body;

    const html = render(
      <Welcomeemail
        name={name}
        email={email}
        phone={phone}
        businessWebsite={business} // note: your form uses 'business'
        message={message}
      />
    );

    await resend.emails.send({
      from: "Website Contact <noreply@yourdomain.com>",
      to: "youremail@gmail.com",  
      subject: "New Contact Form Message",
      html,
    });

    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export { router };
