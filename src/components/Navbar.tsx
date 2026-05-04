import { type FC, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { C, sans } from "../tokens";
import { GoldBtn } from "./ui/GoldBtn";

const links = [
  { label: "Home",     path: "/" },
  { label: "About",    path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact",  path: "/contact" },
];

export const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      height: 90, padding: "0 6%", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      background: scrolled || open ? "rgba(10,15,30,.97)" : "transparent",
      borderBottom: scrolled ? `1px solid rgba(200,169,110,.18)` : "1px solid transparent",
      transition: "background .3s, border .3s",
    }}>
      {/* Logo */}
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src="/logo.png" alt="Cameon Advisory" style={{ height: 80, width: "auto" }} />
      </div>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: "2.2rem", listStyle: "none", alignItems: "center", margin: 0, padding: 0 }} className="desktop-nav">
        {links.map(({ label, path }) => (
          <li key={label}>
            <NavLink
              to={path}
              style={({ isActive }) => ({
                fontFamily: sans, fontSize: ".78rem", letterSpacing: ".12em",
                textTransform: "uppercase", textDecoration: "none", transition: "color .2s",
                color: isActive ? C.accent : C.muted,
              })}
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li><GoldBtn onClick={() => navigate("/contact")}>Let's Talk</GoldBtn></li>
      </ul>

      {/* Hamburger */}
      <div onClick={() => setOpen(!open)} className="hamburger"
        style={{ cursor: "pointer", display: "flex", flexDirection: "column", gap: 5 }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{
            width: 24, height: 2, background: C.light, display: "block", transition: "all .3s",
            transform: open && i === 0 ? "rotate(45deg) translate(5px,5px)"
                     : open && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
            opacity: open && i === 1 ? 0 : 1,
          }} />
        ))}
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "absolute", top: 90, left: 0, right: 0,
          background: "rgba(10,15,30,.98)", padding: "2rem 6%",
          display: "flex", flexDirection: "column", gap: "1.5rem",
        }}>
          {links.map(({ label, path }) => (
            <NavLink key={label} to={path} onClick={() => setOpen(false)}
              style={{ fontFamily: sans, fontSize: ".9rem", letterSpacing: ".15em", textTransform: "uppercase", color: C.light, textDecoration: "none" }}>
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};