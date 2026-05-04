import { type FC, useState } from "react";
import { C, serif } from "../../tokens";
import { FadeIn } from "../../components/ui/FadeIn";
import { Body } from "../../components/ui/Body";
import { type Pillar } from "../../types";

interface Props { p: Pillar; delay: number; }

export const PillarCard: FC<Props> = ({ p, delay }) => {
  const [hover, setHover] = useState(false);
  return (
    <FadeIn delay={delay} style={{ height: "100%" }}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          height: "100%",
          boxSizing: "border-box",
          background: hover ? C.navy3 : C.navy4,
          border: `1px solid ${hover ? C.accent : "rgba(200,169,110,.15)"}`,
          padding: "2rem", transition: "all .3s", cursor: "default",
        }}
      >
        <div style={{ fontFamily: serif, fontSize: "1.8rem", color: C.accent, marginBottom: "1rem" }}>{p.icon}</div>
        <p style={{ fontFamily: serif, fontSize: "1.15rem", color: C.white, marginBottom: ".75rem" }}>{p.title}</p>
        <Body style={{ fontSize: ".88rem", color: C.muted }}>{p.desc}</Body>
      </div>
    </FadeIn>
  );
};