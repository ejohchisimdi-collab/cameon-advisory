import {type FC,type ReactNode,type CSSProperties, useState } from "react";
import { C, sans } from "../../tokens";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

export const GoldBtn: FC<Props> = ({ children, onClick, style = {} }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: sans, fontSize: ".78rem", letterSpacing: ".15em",
        textTransform: "uppercase", padding: ".75rem 2rem",
        border: `1px solid ${C.accent}`,
        background: hover ? C.accent : "transparent",
        color: hover ? C.navy : C.accent,
        cursor: "pointer", transition: "all .2s", ...style,
      }}
    >
      {children}
    </button>
  );
};