import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Aryan Dalwadi | Full Stack Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadImage(relativePath: string) {
  const buffer = await readFile(join(process.cwd(), "public", relativePath));
  const extension = relativePath.split(".").pop()?.toLowerCase();

  return `data:image/${extension === "jpg" ? "jpeg" : extension};base64,${buffer.toString("base64")}`;
}

export default async function Image() {
  const [crmDashboard, haulerrDashboard, fusionHome] = await Promise.all([
    loadImage("projects/crm-emperor/real-estate/dashboard.png"),
    loadImage("projects/haulerr/rider-dashboard.png"),
    loadImage("projects/fusion-pizza/home.png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #001d2e 0%, #023047 52%, #0ea5e9 100%)",
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "42%",
            padding: "56px",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
              fontSize: "18px",
              fontWeight: 700,
              color: "#7dd3fc",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "999px",
                background: "#38bdf8",
              }}
            />
            Portfolio
          </div>

          <div
            style={{
              fontSize: "58px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Aryan Dalwadi
          </div>

          <div
            style={{
              marginTop: "18px",
              fontSize: "30px",
              fontWeight: 600,
              color: "#e0f2fe",
            }}
          >
            Full Stack Developer
          </div>

          <div
            style={{
              marginTop: "28px",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {["React.js", "Node.js", "Express.js", "MSSQL", "SaaS", "REST APIs"].map(
              (skill) => (
                <div
                  key={skill}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  {skill}
                </div>
              ),
            )}
          </div>

          <div
            style={{
              marginTop: "34px",
              fontSize: "20px",
              lineHeight: 1.5,
              color: "#cbd5e1",
              maxWidth: "420px",
            }}
          >
            Enterprise SaaS platforms, real-time systems, and scalable web
            applications.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "58%",
            padding: "40px 48px 40px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              background: "#eef4f8",
              boxShadow: "0 30px 80px rgba(0,0,0,0.28)",
              border: "1px solid rgba(255,255,255,0.35)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 18px",
                background: "white",
                borderBottom: "1px solid #dbeafe",
              }}
            >
              <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#ef4444" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#f59e0b" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#22c55e" }} />
              <div
                style={{
                  marginLeft: "12px",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  background: "#f8fafc",
                  color: "#64748b",
                  fontSize: "16px",
                }}
              >
                aryan-dalwadi-portfolio.vercel.app
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                gap: "14px",
                padding: "18px",
                background: "#eef4f8",
              }}
            >
              <img
                alt="CRM Emperor dashboard"
                src={crmDashboard}
                style={{
                  width: "34%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top left",
                  borderRadius: "16px",
                  border: "1px solid #dbeafe",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  width: "66%",
                }}
              >
                <img
                  alt="Haulerr rider dashboard"
                  src={haulerrDashboard}
                  style={{
                    width: "100%",
                    height: "48%",
                    objectFit: "cover",
                    objectPosition: "top left",
                    borderRadius: "16px",
                    border: "1px solid #dbeafe",
                  }}
                />
                <img
                  alt="Fusion Pizza home screen"
                  src={fusionHome}
                  style={{
                    width: "100%",
                    height: "48%",
                    objectFit: "cover",
                    objectPosition: "top left",
                    borderRadius: "16px",
                    border: "1px solid #dbeafe",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
