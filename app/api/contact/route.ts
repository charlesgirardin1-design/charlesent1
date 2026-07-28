import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/data";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Merci de remplir tous les champs." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "L'envoi d'email n'est pas encore configuré sur ce site." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: siteConfig.email,
    replyTo: email,
    subject: `Nouveau message de ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: "L'envoi a échoué, réessayez plus tard." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
