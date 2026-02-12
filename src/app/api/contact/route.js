import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import Contact from "@/models/Contact";

const sendResponse = (message, code = 200, extra = {}) => {
  return NextResponse.json({ code, message, ...extra }, { status: code });
};

export async function POST(req) {
  try {
    await connect(); 

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return sendResponse("Name, email, and message are required", 400);
    }

    const newMessage = new Contact({
      name,
      email,
      message,
      subject: subject || "N/A",
    });
    await newMessage.save();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

   const info = await transporter.sendMail({
  from: `"JVSMINDIA Enquiry Desk" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,
  subject: `New Client Enquiry | ${name}`,
  html: `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background:#f4f6fb; padding:40px 0;">
    <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 15px 40px rgba(0,0,0,0.08); border:1px solid #e5e7eb;">
      
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#020035,#5b6cf2); padding:28px; text-align:center; color:white;">
        <h1 style="margin:0; font-size:22px; letter-spacing:1px;">NEW CLIENT ENQUIRY RECEIVED</h1>
        <p style="margin:8px 0 0; font-size:14px; opacity:0.9;">Contact Form Notification</p>
      </div>

      <!-- Body -->
      <div style="padding:30px 28px;">
        <h2 style="margin-top:0; color:#111827; font-size:18px; border-bottom:2px solid #5b6cf2; padding-bottom:8px;">
          Client Information
        </h2>

        <table style="width:100%; margin-top:15px; border-collapse:collapse; font-size:14px;">
          <tr>
            <td style="padding:10px; font-weight:600; color:#374151; width:35%;">Full Name</td>
            <td style="padding:10px; background:#f9fafb; border-radius:6px;">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px; font-weight:600; color:#374151;">Email Address</td>
            <td style="padding:10px; background:#f9fafb; border-radius:6px;">${email}</td>
          </tr>
          <tr>
            <td style="padding:10px; font-weight:600; color:#374151;">Subject</td>
            <td style="padding:10px; background:#f9fafb; border-radius:6px;">${subject || "Not Provided"}</td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="margin-top:22px;">
          <h3 style="margin-bottom:8px; color:#111827;">Client Message</h3>
          <div style="background:#f3f4f6; padding:16px; border-left:4px solid #5b6cf2; border-radius:8px; color:#374151; line-height:1.6;">
            ${message}
          </div>
        </div>

        <!-- CTA Style Highlight -->
        <div style="margin-top:28px; padding:14px; background:#020035; color:white; text-align:center; border-radius:8px; font-size:14px;">
          Immediate follow-up is recommended to maintain professional engagement.
        </div>
      </div>

      <!-- Footer -->
      <div style="background:#f9fafb; padding:18px; text-align:center; font-size:12px; color:#6b7280; border-top:1px solid #e5e7eb;">
        This notification was automatically generated from the JVSMINDIA official website contact system.<br/>
        © ${new Date().getFullYear()} JVSMINDIA. All rights reserved.
      </div>

    </div>
  </div>
  `,
});


    console.log("Message sent: %s", info.messageId);

    return sendResponse("Enquiry sent successfully", 200, { success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    return sendResponse("Failed to send enquiry", 500, { success: false, error: error.message });
  }
}
