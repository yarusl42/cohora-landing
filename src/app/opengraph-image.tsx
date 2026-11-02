import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cohora — Less admin. More teaching.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fbfbf8",
          color: "#19222d",
          display: "flex",
          height: "100%",
          width: "100%",
          padding: "78px 88px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ color: "#1268ed", display: "flex", fontSize: 27, fontWeight: 700, letterSpacing: "-0.8px" }}>Cohora</div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
            <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: "-5px", lineHeight: 1 }}>Less admin.</div>
            <div style={{ color: "#1268ed", display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: "-5px", lineHeight: 1.08 }}>More teaching.</div>
            <div style={{ color: "#65717e", display: "flex", fontSize: 27, marginTop: 29 }}>A clear workspace for independent tutors.</div>
          </div>
          <div style={{ color: "#65717e", display: "flex", fontSize: 21 }}>Students · Lessons · Homework · Payments</div>
        </div>
        <div style={{ background: "#16bda7", borderRadius: 999, height: 240, opacity: 0.16, position: "absolute", right: -35, top: -40, width: 240 }} />
        <div style={{ background: "#1268ed", borderRadius: 999, bottom: -170, height: 420, opacity: 0.12, position: "absolute", right: 60, width: 420 }} />
      </div>
    ),
    size,
  );
}
