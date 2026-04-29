
import { type FC } from "react";
import { C, serif, sans } from "../../tokens";
import { FadeIn } from "../../components/ui/FadeIn";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { H2 } from "../../components/ui/H2";
import { Body } from "../../components/ui/Body";
import { GoldBtn } from "../../components/ui/GoldBtn";

const EMAIL = "hello@cameonadvisory.com"; // replace with real email

const areas: [string, string][] = [
  ["Strategy & Transformation",  "Organisational redesign, operating model, governance."],
  ["Data & Digital",             "Dashboards, intelligence products, reporting systems."],
  ["Climate & Emerging Markets", "Carbon market analysis, Africa-focused advisory."],
  ["Venture Support",            "Founders, funders, ecosystem actors."],
];

const Contact: FC = () => (
  <div style={{ paddingTop: 68 }}>
    <section style={{ background: `linear-gradient(135deg, ${C.navy3} 0%, ${C.navy} 60%)`, padding: "7rem 6% 5rem" }}>
      <FadeIn><Eyebrow t="Contact" /></FadeIn>
      <FadeIn delay={0.1}><H2 style={{ maxWidth: 540, marginBottom: "1rem" }}>Let's discuss your challenge</H2></FadeIn>
      <FadeIn delay={0.2}><Body style={{ color: C.muted, maxWidth: 480 }}>We work best when there's a real challenge to solve. Reach out directly and we'll take it from there.</Body></FadeIn>
    </section>

    <section style={{ background: C.navy, padding: "5rem 6%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "5rem", maxWidth: 1100, margin: "0 auto", alignItems: "start" }}>

        {/* Areas */}
        <FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {areas.map(([t, d]) => (
              <div key={t} style={{ borderLeft: `2px solid ${C.accent}`, paddingLeft: "1.2rem" }}>
                <p style={{ fontFamily: serif, fontSize: "1rem", color: C.white, marginBottom: ".3rem" }}>{t}</p>
                <Body style={{ fontSize: ".85rem", color: C.muted }}>{d}</Body>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Email CTA */}
        <FadeIn delay={0.2}>
          <div style={{ background: C.navy2, border: `1px solid rgba(200,169,110,.15)`, padding: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ fontSize: "2rem" }}>✦</div>
            <H2 style={{ fontSize: "1.6rem" }}>Get in touch</H2>
            <Body style={{ color: C.muted }}>
              Send us a short note about your organisation and the challenge you're working on. We'll respond within two business days.
            </Body>
            <a href={`mailto:${EMAIL}?subject=Let's discuss a challenge`} style={{ textDecoration: "none" }}>
              <GoldBtn>Email Us Directly</GoldBtn>
            </a>
            <p style={{ fontFamily: sans, fontSize: ".8rem", color: C.muted }}>
              {EMAIL}
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  </div>
);

export default Contact;
