import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: "#0a0a0c", color: "#f4f4f5", fontFamily: "monospace" }}>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#fb7185" }}>
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#fb7185",
                animation: "pulse 1.2s infinite",
              }}
            />
            REC · 404
          </div>
          <h1 style={{ fontSize: "clamp(40px,10vw,110px)", letterSpacing: "-0.04em", margin: 0 }}>
            404
          </h1>
          <p style={{ color: "#9d9da7", fontSize: "14px", margin: 0, maxWidth: "420px", lineHeight: 1.6 }}>
            Este corte no existe.<br />
            This cut does not exist.
          </p>
          <Link
            href="/"
            style={{
              color: "#0a0a0c",
              background: "#a3e635",
              padding: "12px 28px",
              borderRadius: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            Volver al inicio · Go home
          </Link>
          <style>{`@keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: .3 } }`}</style>
        </main>
      </body>
    </html>
  );
}