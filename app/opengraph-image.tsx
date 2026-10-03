import { ImageResponse } from "next/og";

export const alt = "HaidurQureshi Ltd | Custom Software, Websites and Mobile Apps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fafaf9",
          color: "#18181b",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 600, color: "#2563eb" }}>
          HaidurQureshi Ltd
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Software that works well and looks good.
        </div>
        <div style={{ fontSize: 30, color: "#52525b" }}>
          Custom websites · Mobile apps · Software systems
        </div>
      </div>
    ),
    size,
  );
}
