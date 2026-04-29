import { type FC, useState } from "react";
import { C, serif, sans } from "../../tokens";
import { FadeIn } from "../../components/ui/FadeIn";
import { Body } from "../../components/ui/Body";
import { type Service } from "../../types";

interface Props { s: Service; delay: number; }

export const ServiceRow: FC<Props> = ({ s, delay }) => {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div style={{
        background: C.navy2,
        border: `1px solid ${open ? "rgba(200,169,110,.4)" : "rgba(200,169,110,.12)"}`,
        transition: "border-color .2s",
      }}>
        <div
          onClick={() => setOpen(!open)}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem 2.5rem", cursor: "pointer", gap: "1rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <span style={{ fontFamily: sans, fontSize: ".7rem", color: C.accent, letterSpacing: ".15em" }}>{s.n}</span>
            <p style={{ fontFamily: serif, fontSize: "clamp(1.1rem,2.5vw,1.5rem)", color: C.white }}>{s.title}</p>
          </div>
          <span style={{ color: C.accent, fontSize: "1.4rem", transform: open ? "rotate(45deg)" : "none", transition: "transform .3s", flexShrink: 0 }}>+</span>
        </div>
        {open && (
          <div style={{ padding: "0 2.5rem 2rem", borderTop: `1px solid rgba(200,169,110,.12)` }}>
            <Body style={{ marginTop: "1.5rem", marginBottom: "1.5rem", maxWidth: 680 }}>{s.desc}</Body>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
              {s.tags.map((tag) => (
                <span key={tag} style={{
                  fontFamily: sans, fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase",
                  border: `1px solid rgba(200,169,110,.3)`, color: C.accent, padding: ".35rem .9rem",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
};

