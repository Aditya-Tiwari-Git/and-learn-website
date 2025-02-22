import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 2525,
  secure: false,
  auth: {
    user: "cm2w280f4f@vvatxiy.com",
    pass: "C0C3B11B4563EAEE31BCECF463D2CB17A331"
  }
});

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  const mailOptions = {
    from: "cm2w280f4f@vvatxiy.com",
    to: "aditiw.work@gmail.com",
    subject: `Contact Form Submission from ${data.name}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
    `,
    html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Message:</strong></p>
<p>${data.message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
}
