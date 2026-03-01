import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nicola Berry — Principal Digital Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "linear-gradient(135deg, #120008 0%, #1e0010 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    fontFamily: "serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Glow blobs */}
                <div style={{ position: "absolute", top: "-150px", left: "-150px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(91,0,36,0.5) 0%, transparent 70%)", display: "flex" }} />
                <div style={{ position: "absolute", bottom: "-150px", right: "-150px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(61,0,24,0.6) 0%, transparent 70%)", display: "flex" }} />

                {/* NB Monogram */}
                <div style={{ color: "#c994a4", fontSize: "24px", fontWeight: "bold", letterSpacing: "3px", marginBottom: "12px", display: "flex" }}>
                    NB
                </div>

                {/* Accent line */}
                <div style={{ width: "280px", height: "2px", background: "linear-gradient(90deg, #5B0024, #c994a4, transparent)", marginBottom: "32px", display: "flex" }} />

                {/* Main name */}
                <div style={{ color: "#ffffff", fontSize: "88px", fontWeight: "bold", lineHeight: 1, letterSpacing: "-2px", marginBottom: "24px", display: "flex" }}>
                    Nicola Berry
                </div>

                {/* Title */}
                <div style={{ color: "#e8dde0", fontSize: "22px", opacity: 0.75, letterSpacing: "1px", marginBottom: "40px", display: "flex" }}>
                    Principal Digital Architect · Technical Founder · Scotland
                </div>

                {/* Pills */}
                <div style={{ display: "flex", gap: "12px" }}>
                    {["Full-Stack Dev", "AI Automation", "SaaS Builder"].map((label) => (
                        <div
                            key={label}
                            style={{
                                padding: "8px 20px",
                                borderRadius: "999px",
                                border: "1px solid rgba(201,148,164,0.4)",
                                background: "rgba(91,0,36,0.4)",
                                color: "#e8dde0",
                                fontSize: "14px",
                                letterSpacing: "1px",
                                display: "flex",
                            }}
                        >
                            {label}
                        </div>
                    ))}
                </div>

                {/* Domain URL bottom right */}
                <div style={{ position: "absolute", bottom: "60px", right: "80px", color: "#c994a4", fontSize: "20px", letterSpacing: "2px", display: "flex" }}>
                    nicolaberry.uk
                </div>

                {/* PORTFOLIO label top right */}
                <div style={{ position: "absolute", top: "60px", right: "80px", color: "#c994a4", fontSize: "13px", letterSpacing: "6px", opacity: 0.8, display: "flex" }}>
                    PORTFOLIO
                </div>

                {/* Vertical accent bar */}
                <div style={{ position: "absolute", right: "80px", top: "120px", width: "2px", height: "180px", background: "linear-gradient(180deg, #c994a4, #5B0024, transparent)", display: "flex" }} />
            </div>
        ),
        { ...size }
    );
}
