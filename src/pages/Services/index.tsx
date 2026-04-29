import { type FC } from "react";
import { C, serif, sans } from "../../tokens";
import { type Service } from "../../types";
import { FadeIn } from "../../components/ui/FadeIn";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { H2 } from "../../components/ui/H2";
import { Body } from "../../components/ui/Body";
import { ServiceRow } from "./ServiceRow";

const services: Service[] = [
  {
    n: "01", title: "Complex Transformation",
    desc: "We help organisations redesign how decisions are made, work is coordinated, and performance is tracked. This includes operating model design, governance frameworks, and capability-building programmes.",
    tags: ["Operating Model Design", "Governance", "Change Management", "Performance Frameworks"],
  },
  {
    n: "02", title: "Data & Digital Enablement",
    desc: "We design and deliver dashboards, reporting systems, and intelligence products that unlock stronger visibility and decision-making — translating complex data into tools that people actually use.",
    tags: ["Dashboard Design", "Data Strategy", "Reporting Systems", "Decision Support Tools"],
  },
  {
    n: "03", title: "Climate, Carbon & Emerging Markets",
    desc: "We provide analytical clarity and execution-oriented support for clients operating in fast-evolving climate and carbon markets, with a particular focus on Africa and emerging economies.",
    tags: ["Carbon Market Intelligence", "Climate Strategy", "Africa & Emerging Markets", "Policy Analysis"],
  },
  {
    n: "04", title: "Venture & Ecosystem Support",
    desc: "We work with founders, funders, and ecosystem actors to validate opportunities, sharpen strategy, and navigate uncertainty — especially in markets where the rules are still being written.",
    tags: ["Market Validation", "Venture Strategy", "Ecosystem Mapping", "Founder Advisory"],
  },
];

const steps: [string, string, string][] = [
  ["01", "Clarify",   "Define the problem and decision context precisely."],
  ["02", "Prioritise","Identify what matters most and sequence accordingly."],
  ["03", "Design",    "Develop practical, evidence-led pathways forward."],
  ["04", "Translate", "Turn complexity into useful tools and structures."],
  ["05", "Adopt",     "Support implementation through people and process alignment."],
];

const Services: FC = () => (
  <div style={{ paddingTop: 68 }}>
    <section style={{ background: `linear-gradient(135deg, ${C.navy3} 0%, ${C.navy} 60%)`, padding: "7rem 6% 5rem" }}>
      <FadeIn><Eyebrow t="Our Services" /></FadeIn>
      <FadeIn delay={0.1}><H2 style={{ maxWidth: 600, marginBottom: "1.5rem" }}>Four areas where we add distinctive value</H2></FadeIn>
      <FadeIn delay={0.2}><Body style={{ maxWidth: 560, color: C.muted }}>Our work sits at the intersection of advisory and execution — practical, evidence-led, and designed for real implementation.</Body></FadeIn>
    </section>

    <section style={{ background: C.navy, padding: "5rem 6%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", maxWidth: 1100, margin: "0 auto" }}>
        {services.map((s, i) => <ServiceRow key={s.n} s={s} delay={i * 0.1} />)}
      </div>
    </section>

    <section style={{ background: C.navy2, padding: "6rem 6%", borderTop: `1px solid rgba(200,169,110,.12)` }}>
      <FadeIn><Eyebrow t="Our Approach" /></FadeIn>
      <FadeIn delay={0.1}><H2 style={{ marginBottom: "3rem" }}>How we work</H2></FadeIn>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))" }}>
        {steps.map(([n, t, d], i) => (
          <FadeIn key={t} delay={i * 0.1}>
            <div style={{ borderLeft: i > 0 ? `1px solid rgba(200,169,110,.15)` : "none", padding: "1.5rem 2rem", borderTop: `2px solid ${i === 0 ? C.accent : "transparent"}` }}>
              <p style={{ fontFamily: sans, fontSize: ".7rem", letterSpacing: ".18em", color: C.accent, textTransform: "uppercase", marginBottom: ".6rem" }}>{n}</p>
              <p style={{ fontFamily: serif, fontSize: "1.1rem", color: C.white, marginBottom: ".5rem" }}>{t}</p>
              <Body style={{ fontSize: ".83rem", color: C.muted }}>{d}</Body>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  </div>
);

export default Services;