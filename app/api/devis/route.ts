import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/data";

export async function POST(request: Request) {
  const { name, email, message, projectType, addons, timeline, estimate } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    !name.trim() ||
    !email.trim()
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

  const addonsList = Array.isArray(addons) && addons.length ? addons.join(", ") : "Aucune option";

  const text = [
    `Nouvelle demande de devis`,
    ``,
    `Nom : ${name}`,
    `Email : ${email}`,
    `Type de projet : ${projectType || "Non précisé"}`,
    `Options : ${addonsList}`,
    `Délai souhaité : ${timeline || "Non précisé"}`,
    `Estimation indicative : ${estimate || "Non calculée"}`,
    ``,
    `Précisions du client :`,
    message ? String(message) : "(aucune)",
  ].join("\n");

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: siteConfig.email,
    replyTo: email,
    subject: `Nouvelle demande de devis — ${name}`,
    text,
  });

  if (error) {
    console.error("Resend error (devis):", JSON.stringify(error));
    return NextResponse.json({ error: "L'envoi a échoué, réessayez plus tard." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
