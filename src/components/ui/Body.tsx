import { type FC,type ReactNode,type CSSProperties } from "react";
import { C, sans } from "../../tokens";

export const Body: FC<{ children: ReactNode; style?: CSSProperties }> = ({ children, style = {} }) => (
  <p style={{ fontFamily: sans, fontSize: ".95rem", color: C.light, lineHeight: 1.8, ...style }}>
    {children}
  </p>
);