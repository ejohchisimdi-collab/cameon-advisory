import {type FC } from "react";
import { C, serif, sans } from "../../tokens";
import { FadeIn } from "../../components/ui/FadeIn";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { GoldLine } from "../../components/ui/GoldLine";
import { H2 } from "../../components/ui/H2";
import { Body } from "../../components/ui/Body";

const values: [string, string][] = [
  ["Navigate complexity",                    "Making complex challenges easier to understand and act upon."],
  ["Think strategically, design practically","Combining big-picture thinking with hands-on solution design."],
  ["Grounded in evidence",                   "Every recommendation is backed by rigorous analysis."],
  ["Designed for stakeholder uptake",        "Solutions built for real people, not just technical audiences."],
  ["Implementation is the real work",        "We stay engaged from strategy through to execution."],
];

const About: FC = () => (
  <div style={{ paddingTop: 68 }}>
    {/* Hero */}
    <section style={{ background: `linear-gradient(135deg, ${C.navy3} 0%, ${C.navy} 60%)`, padding: "7rem 6% 5rem" }}>
      <FadeIn><Eyebrow t="About Cameon" /></FadeIn>
      <FadeIn delay={0.1}><H2 style={{ maxWidth: 680, marginBottom: "1.5rem" }}>Founded to help organisations move from ideas to implementation</H2></FadeIn>
      <FadeIn delay={0.2}><GoldLine /></FadeIn>
      <FadeIn delay={0.3}>
        <Body style={{ maxWidth: 620, fontSize: "1.05rem" }}>
          We support institutions, investors, and ventures working through complex transformation challenges — especially where success depends on aligning strategy, systems, data, and people.
        </Body>
      </FadeIn>
    </section>

    {/* Founder */}
    <section style={{ background: C.navy2, padding: "6rem 6%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "4rem", alignItems: "center", maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <Eyebrow t="Our Founder" />
          <H2 style={{ marginBottom: "1.5rem" }}>A practitioner with a global lens</H2>
          <GoldLine />
          <Body style={{ marginBottom: "1.2rem" }}>
            Cameon Advisory is led by a management consultant and Chartered Professional Engineer with over a decade of experience spanning strategy, digital and operational transformation, stakeholder management, business development, research, and analytics.
          </Body>
          <Body style={{ color: C.muted }}>
            This background combines a structured engineering mindset with practical advisory experience across industries, markets, and geographies — with a long-standing focus on innovation, platform models, and solutions that generate both commercial and social value.
          </Body>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ background: C.navy3, border: `1px solid rgba(200,169,110,.2)`, padding: "3rem", position: "relative" }}>
            <div style={{ position: "absolute", top: -1, left: -1, width: 48, height: 48, borderTop: `2px solid ${C.accent}`, borderLeft: `2px solid ${C.accent}` }} />
            <div style={{ position: "absolute", bottom: -1, right: -1, width: 48, height: 48, borderBottom: `2px solid ${C.accent}`, borderRight: `2px solid ${C.accent}` }} />
            <p style={{ fontFamily: serif, fontSize: "1.4rem", color: C.white, lineHeight: 1.5, fontStyle: "italic" }}>
              "Taking complex, fragmented, or fast-evolving challenges and turning them into something clearer, more actionable, and more useful."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Values */}
    <section style={{ background: C.navy, padding: "6rem 6%", borderTop: `1px solid rgba(200,169,110,.12)` }}>
      <FadeIn><Eyebrow t="What We Believe" /></FadeIn>
      <FadeIn delay={0.1}><H2 style={{ marginBottom: "3.5rem" }}>Our operating principles</H2></FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2rem" }}>
        {values.map(([t, d], i) => (
          <FadeIn key={t} delay={i * 0.08}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ width: 8, height: 8, background: C.accent, marginTop: 8, flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: serif, fontSize: "1.1rem", color: C.white, marginBottom: ".4rem" }}>{t}</p>
                <Body style={{ fontSize: ".88rem", color: C.muted }}>{d}</Body>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  </div>
);

export default About;
