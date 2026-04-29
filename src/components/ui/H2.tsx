import {type FC, type ReactNode, type CSSProperties } from "react";
import { C, serif } from "../../tokens";

export const H2: FC<{ children: ReactNode; style?: CSSProperties }> = ({ children, style = {} }) => (
  <h2 style={{
    fontFamily: serif, fontSize: "clamp(2rem,4vw,3rem)",
    fontWeight: 400, color: C.white, lineHeight: 1.15, ...style,
  }}>
    {children}
  </h2>
);