import nodemailer from 'nodemailer';

export async function POST (req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${name}`,
   text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`

  }

  try {
    await transporter.sendMail(mailOptions)
    return new Response(JSON.stringify({ success: true}), { status: 200 })

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false}), { status: 500 })
    
  }
}