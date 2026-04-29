import {type FC } from "react";
import { C, serif, sans } from "../tokens";

export const Footer: FC = () => (
  <footer style={{
    background: C.navy, borderTop: `1px solid rgba(200,169,110,.15)`,
    padding: "3rem 6%", display: "flex", flexWrap: "wrap",
    justifyContent: "space-between", alignItems: "center", gap: "1.5rem",
  }}>
    <div>
      <div style={{ fontFamily: serif, fontSize: "1.1rem", color: C.accent, letterSpacing: ".1em" }}>CAMEON</div>
      <div style={{ fontFamily: sans, fontSize: ".72rem", color: C.muted, letterSpacing: ".18em", marginTop: 4 }}>
        Advisory & Consulting Ltd
      </div>
    </div>
    <p style={{ fontFamily: sans, fontSize: ".78rem", color: C.muted }}>Strategy · Data · Climate · Ventures</p>
    <p style={{ fontFamily: sans, fontSize: ".75rem", color: C.muted }}>
      © {new Date().getFullYear()} Cameon Advisory & Consulting Ltd
    </p>
  </footer>
);

