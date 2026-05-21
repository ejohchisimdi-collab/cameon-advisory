import { type FC, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { C, sans } from "../tokens";
import { GoldBtn } from "./ui/GoldBtn";

const links = [
  { label: "Home",     path: "/" },
  { label: "About",    path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact",  path: "/contact" },
  {label:"Engagements",path:"/engagements"}
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < breakpoint);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

export const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const isMobile                = useIsMobile();
  const navigate                = useNavigate();

  // Close mobile menu when switching to desktop
  useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = scrolled || open ? "rgba(10,15,30,.97)" : "transparent";
  const navBorder = scrolled ? `1px solid rgba(200,169,110,.18)` : "1px solid transparent";

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      height: 68, padding: "0 6%", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      background: navBg, borderBottom: navBorder,
      transition: "background .3s, border .3s",
    }}>
      {/* Logo */}
      <div
        onClick={() => { navigate("/"); setOpen(false); }}
        style={{
          cursor: "pointer", zIndex: 201,
          background: "transparent",
          // Punch out the logo's baked-in background by matching it exactly
          // then override with the site navy so it blends seamlessly
          display: "flex", alignItems: "center",
        }}
      >
        <img
          src="/logo.png"
          alt="Cameon Advisory"
          style={{
            height: 100,
            width: "auto",
            display: "block",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Desktop nav */}
      {!isMobile && (
        <ul style={{
          display: "flex", gap: "2.2rem", listStyle: "none",
          alignItems: "center", margin: 0, padding: 0,
        }}>
          {links.map(({ label, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                style={({ isActive }) => ({
                  fontFamily: sans, fontSize: ".78rem", letterSpacing: ".12em",
                  textTransform: "uppercase", textDecoration: "none",
                  transition: "color .2s",
                  color: isActive ? C.accent : C.muted,
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li><GoldBtn onClick={() => navigate("/contact")}>Let's Talk</GoldBtn></li>
        </ul>
      )}

      {/* Hamburger — mobile only */}
      {isMobile && (
        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: 5,
            padding: 6, zIndex: 201,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              width: 24, height: 2, background: C.light, display: "block",
              transition: "all .3s",
              transform:
                open && i === 0 ? "rotate(45deg) translate(5px,5px)"
              : open && i === 2 ? "rotate(-45deg) translate(5px,-5px)"
              : "none",
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      )}

      {/* Mobile drawer */}
      {isMobile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: "fixed", inset: 0, top: 68,
            background: "rgba(10,15,30,.98)",
            padding: "2.5rem 6%",
            display: "flex", flexDirection: "column", gap: "1.8rem",
            // Slide in/out
            transform: open ? "translateX(0)" : "translateX(100%)",
            transition: "transform .3s ease",
            overflowY: "auto",
          }}
        >
          {links.map(({ label, path }) => (
            <NavLink
              key={label} to={path}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                fontFamily: sans, fontSize: "1.05rem", letterSpacing: ".15em",
                textTransform: "uppercase", textDecoration: "none",
                color: isActive ? C.accent : C.light,
                borderBottom: `1px solid rgba(200,169,110,.12)`,
                paddingBottom: "1rem",
              })}
            >
              {label}
            </NavLink>
          ))}
          <div style={{ marginTop: "0.5rem" }}>
            <GoldBtn onClick={() => { navigate("/contact"); setOpen(false); }}>
              Let's Talk
            </GoldBtn>
          </div>
        </div>
      )}
    </nav>
  );
};