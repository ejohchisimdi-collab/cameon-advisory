import { type FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { C, serif, sans } from "../../tokens";
import { FadeIn } from "../../components/ui/FadeIn";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { H2 } from "../../components/ui/H2";
import { Body } from "../../components/ui/Body";
import { GoldBtn } from "../../components/ui/GoldBtn";

interface Theme {
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  items: string[];
}

interface Theme {
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  items: string[];
  countries: string[];
}

const themes: Theme[] = [
  {
    icon: "◈",
    title: "Growth and Capital Readiness",
    subtitle: "Helping climate and impact ventures strengthen growth strategy and investor readiness",
    desc: "Supported ventures with growth planning, fundraising materials, investor engagement preparation, partnership development, and strategic prioritisation to improve readiness for scale.",
    items: [
      "Growth strategy refinement",
      "Fundraising and investor-readiness support",
      "Partnership and business development support",
      "Strategic prioritisation for scale",
    ],
    countries: ["Kenya", "Rwanda", "Nigeria", "Uganda"],
  },
  {
    icon: "◉",
    title: "Market, Product, and Commercial Strategy",
    subtitle: "Translating market complexity into clearer go-to-market and product decisions",
    desc: "Worked across customer insight, market positioning, commercial strategy, product framing, and revenue-model thinking to help ventures sharpen their value proposition and improve execution quality.",
    items: [
      "Go-to-market strategy",
      "Product and value proposition refinement",
      "Customer and market insight",
      "Commercial model and revenue strategy support",
    ],
    countries: ["Ethiopia", "Kenya", "Nigeria", "Rwanda", "Tanzania"],
  },
  {
    icon: "◎",
    title: "Systems and Execution Support",
    subtitle: "Building the internal systems, tools, and capabilities that support stronger execution",
    desc: "Advised on dashboards, KPI design, sales enablement, team processes, workflow improvement, and practical operating tools that help organisations make better decisions and execute with more discipline.",
    items: [
      "Dashboard and KPI design",
      "Sales enablement and execution support",
      "Workflow and process improvement",
      "Practical internal systems for growth and accountability",
    ],
    countries: ["Nigeria", "Uganda"],
  },
];

const ThemeCard: FC<{ t: Theme; delay: number }> = ({ t, delay }) => {
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
          padding: "2.25rem",
          transition: "all .3s",
          cursor: "default",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div style={{ fontFamily: serif, fontSize: "1.8rem", color: C.accent }}>{t.icon}</div>
        <p style={{ fontFamily: serif, fontSize: "1.25rem", color: C.white, margin: 0 }}>{t.title}</p>
        <p style={{ fontFamily: serif, fontSize: ".95rem", color: C.accent, margin: 0, fontStyle: "italic" }}>
          {t.subtitle}
        </p>
        <Body style={{ fontSize: ".88rem", color: C.muted }}>{t.desc}</Body>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: ".5rem" }}>
          {t.items.map(item => (
            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem" }}>
              <span style={{ color: C.accent, marginTop: ".15rem", flexShrink: 0, fontSize: ".75rem" }}>◆</span>
              <Body style={{ fontSize: ".85rem", color: C.light, margin: 0 }}>{item}</Body>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "auto", paddingTop: ".75rem", borderTop: `1px solid rgba(200,169,110,.15)`, display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
          {t.countries.map(c => (
            <span key={c} style={{
              fontFamily: sans,
              fontSize: ".72rem",
              color: C.accent,
              border: `1px solid rgba(200,169,110,.4)`,
              borderRadius: "999px",
              padding: ".2rem .7rem",
              letterSpacing: ".03em",
            }}>{c}</span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

const Engagements: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        .eng-grid { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 1000px) { .eng-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  {
          .eng-hero    { padding: 100px 5% 60px !important; }
          .eng-section { padding: 4rem 5% !important; }
          .eng-cta     { padding: 4rem 5% !important; }
          .eng-grid    { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="eng-hero" style={{
        minHeight: "52svh",
        background: `radial-gradient(ellipse at 60% 40%, #1a2a4a 0%, ${C.navy} 65%)`,
        display: "flex", alignItems: "center",
        padding: "120px 6% 80px",
        boxSizing: "border-box",
      }}>
        <div style={{ maxWidth: 700, animation: "fadeUp .8s ease both" }}>
          <Eyebrow t="Selected Engagement Themes" />
          <h1 style={{
            fontFamily: serif,
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 400, color: C.white, lineHeight: 1.12,
            marginBottom: "1.25rem",
          }}>
            Practical problem-solving<br />
            <span style={{ color: C.accent }}>in complex environments.</span>
          </h1>
          <Body style={{ maxWidth: 520, fontSize: "clamp(.95rem, 2.5vw, 1.05rem)" }}>
            The examples below have been intentionally generalised to protect client confidentiality.
            The common thread across our work is connecting strategy, data, and implementation
            to help clients move forward.
          </Body>
        </div>
      </section>

      {/* ── Theme Cards ── */}
      <section className="eng-section" style={{ background: C.navy2, padding: "6rem 6%" }}>
        <FadeIn><Eyebrow t="Past Work" /></FadeIn>
        <FadeIn delay={0.1}><H2 style={{ marginBottom: "3rem" }}>Three engagement themes emerge</H2></FadeIn>
        <div className="eng-grid" style={{ display: "grid", gap: "1.5rem" }}>
          {themes.map((t, i) => <ThemeCard key={t.title} t={t} delay={i * 0.1} />)}
        </div>
      </section>

      {/* ── Closing note ── */}
      <section className="eng-section" style={{
        background: C.navy3, padding: "5rem 6%",
        borderTop: `1px solid rgba(200,169,110,.12)`,
        borderBottom: `1px solid rgba(200,169,110,.12)`,
      }}>
        <FadeIn>
          <div style={{ maxWidth: 680 }}>
            <div style={{ borderLeft: `2px solid ${C.accent}`, paddingLeft: "1.5rem" }}>
              <Body style={{ fontSize: "1.05rem", color: C.light, lineHeight: 1.75 }}>
                Across these engagements, our role has been to bring structure, clarity, and
                practical support to ventures operating in complex and fast-evolving environments.
              </Body>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── CTA ── */}
      <section className="eng-cta" style={{ background: C.navy, padding: "6rem 6%", textAlign: "center" }}>
        <FadeIn>
          <Eyebrow t="Work With Us" />
          <H2 style={{ marginBottom: "1.5rem" }}>Discuss a similar engagement</H2>
          <Body style={{ maxWidth: 480, margin: "0 auto 2.5rem", color: C.muted }}>
            If any of these themes resonate with a challenge you're facing, we'd welcome the conversation.
          </Body>
          <GoldBtn onClick={() => navigate("/contact")}>Get in Touch</GoldBtn>
        </FadeIn>
      </section>
    </>
  );
};

export default Engagements;