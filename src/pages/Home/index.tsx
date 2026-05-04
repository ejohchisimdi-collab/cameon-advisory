import {type FC } from "react";
import { useNavigate } from "react-router-dom";
import { C, serif, sans } from "../../tokens";
import {type Pillar } from "../../types";
import { FadeIn } from "../../components/ui/FadeIn";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { H2 } from "../../components/ui/H2";
import { Body } from "../../components/ui/Body";
import { GoldBtn } from "../../components/ui/GoldBtn";
import { PillarCard } from "./PillarCard";

const pillars: Pillar[] = [
  { icon: "◈", title: "Complex Transformation",     desc: "Redesigning how decisions are made, work is coordinated, and performance is tracked." },
  { icon: "◉", title: "Data & Digital Enablement",  desc: "Dashboards, intelligence products, and reporting systems that unlock stronger decision-making." },
  { icon: "◎", title: "Climate & Emerging Markets", desc: "Analytical clarity and execution-oriented support in fast-evolving climate and carbon markets." },
  { icon: "◇", title: "Venture & Ecosystem Support",desc: "Helping founders and funders validate opportunities, sharpen strategy, and navigate uncertainty." },
];

const principles: [string, string][] = [
  ["Navigate complexity",  "Making complex challenges easier to understand and act on."],
  ["Evidence-led",         "Grounding recommendations in rigorous analysis, not assumptions."],
  ["Built for adoption",   "Designing for stakeholder uptake, not just technical elegance."],
  ["Implementation first", "Recognising that implementation is where the real work begins."],
];

const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        background: `radial-gradient(ellipse at 60% 40%, #1a2a4a 0%, ${C.navy} 65%)`,
        display: "flex", alignItems: "center", padding: "120px 6% 80px",
      }}>
        <div style={{ maxWidth: 720, animation: "fadeUp .8s ease both" }}>
          <Eyebrow t="Advisory & Consulting" />
          <h1 style={{
            fontFamily: serif, fontSize: "clamp(2.8rem,6vw,5rem)",
            fontWeight: 400, color: C.white, lineHeight: 1.1, marginBottom: "1.5rem",
          }}>
            A global perspective<br />
            <span style={{ color: C.accent }}>on strategy</span><br />
            and execution.
          </h1>
          <Body style={{ maxWidth: 540, marginBottom: "2.5rem", fontSize: "1.05rem" }}>
            Cameon Advisory helps organisations move from ideas to implementation — aligning strategy, systems, data, and people across complex transformation challenges.
          </Body>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <GoldBtn onClick={() => navigate("/services")}>Our Services</GoldBtn>
            <GoldBtn onClick={() => navigate("/contact")} style={{ borderColor: C.muted, color: C.muted }}>Let's Talk</GoldBtn>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ background: C.navy2, padding: "6rem 6%" }}>
        <FadeIn><Eyebrow t="Where We Add Value" /></FadeIn>
        <FadeIn delay={0.1}><H2 style={{ marginBottom: "3.5rem" }}>Four areas of focus</H2></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
          {pillars.map((p, i) => <PillarCard key={p.title} p={p} delay={i * 0.1} />)}
        </div>
      </section>

      {/* Principles */}
      <section style={{
        background: C.navy3, padding: "5rem 6%",
        borderTop: `1px solid rgba(200,169,110,.12)`, borderBottom: `1px solid rgba(200,169,110,.12)`,
      }}>
        <FadeIn><Eyebrow t="What We Believe" /></FadeIn>
        <FadeIn delay={0.1}><H2 style={{ marginBottom: "3rem" }}>Good advisory should be<br />useful in practice</H2></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "2rem" }}>
          {principles.map(([t, d], i) => (
            <FadeIn key={t} delay={i * 0.1}>
              <div style={{ borderLeft: `2px solid ${C.accent}`, paddingLeft: "1.2rem" }}>
                <p style={{ fontFamily: serif, fontSize: "1.15rem", color: C.white, marginBottom: ".5rem" }}>{t}</p>
                <Body style={{ fontSize: ".88rem", color: C.muted }}>{d}</Body>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.navy, padding: "6rem 6%", textAlign: "center" }}>
        <FadeIn>
          <Eyebrow t="Ready to begin?" />
          <H2 style={{ marginBottom: "1.5rem" }}>Let's discuss your challenge</H2>
          <Body style={{ maxWidth: 500, margin: "0 auto 2.5rem", color: C.muted }}>
            Clients come to Cameon when they need more than a conventional strategy deck.
          </Body>
          <GoldBtn onClick={() => navigate("/contact")}>Get in Touch</GoldBtn>
        </FadeIn>
      </section>
    </div>
  );
};

export default Home;