import { ImageResponse } from "next/og";
import { projects } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#050505",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(34,211,238,0.3), transparent 55%), radial-gradient(circle at 85% 85%, rgba(139,92,246,0.3), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            color: "#3b82f6",
            marginBottom: 28,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 32, height: 1, background: "#3b82f6", display: "flex" }} />
          {project?.sector ?? "Réalisation"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {project?.title ?? "Projet"}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
            fontFamily: "monospace",
            background: "rgba(255,255,255,0.06)",
            padding: "12px 24px",
            borderRadius: 999,
            alignSelf: "flex-start",
          }}
        >
          {project?.categoryLabel ?? ""}
        </div>
      </div>
    ),
    { ...size }
  );
}
