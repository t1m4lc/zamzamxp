import nodemailer from "nodemailer";
import { APP_CONFIG } from "~/config/constants";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  // Validate required fields
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields",
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid email address",
    });
  }

  // Create transporter with Dynadot SMTP settings
  const transporter = nodemailer.createTransport({
    host: APP_CONFIG.smtp.host,
    port: APP_CONFIG.smtp.port,
    secure: false, // true for 465, false for other ports (587 uses STARTTLS)
    auth: {
      user: APP_CONFIG.smtp.user,
      pass: config.smtpPass,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"${body.name}" <${APP_CONFIG.smtp.user}>`,
      to: APP_CONFIG.company.email,
      replyTo: body.email,
      subject: body.subject || "New Contact Form Submission - ZamZam XP",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #FF6B35; }
            .message { background: white; padding: 15px; border-left: 4px solid #FF6B35; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">🌍 New Contact Form Submission</h2>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">ZamZam XP Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">From:</span> ${body.name}
              </div>
              <div class="field">
                <span class="label">Email:</span> <a href="mailto:${body.email}">${body.email}</a>
              </div>
              <div class="field">
                <span class="label">Subject:</span> ${body.subject || "N/A"}
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message">
                  ${body.message.replace(/\n/g, "<br>")}
                </div>
              </div>
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
              <p style="font-size: 12px; color: #666; margin: 0;">
                This email was sent from the contact form on zamzamxp.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission - ZamZam XP

From: ${body.name}
Email: ${body.email}
Subject: ${body.subject || "N/A"}

Message:
${body.message}

---
This email was sent from the contact form on zamzamxp.com
      `,
    });

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error: any) {
    console.error("Email sending error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email. Please try again later.",
    });
  }
});
