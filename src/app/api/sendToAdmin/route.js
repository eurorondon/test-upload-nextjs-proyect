import { NextResponse } from "next/server";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "admin@lepecreativo.com",
      to: ["eurorondon03@gmail.com"],
      subject: subject,
      react: (
        <>
          <p>Hola, Alguien Te ha dejado un Correo</p>
          <p>Correo del Cliente: {email}</p>
          <h1>{subject}</h1>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
