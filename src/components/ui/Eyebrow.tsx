import { type FC } from "react";
import { C, sans } from "../../tokens";

export const Eyebrow: FC<{ t: string }> = ({ t }) => (
  <p style={{
    fontFamily: sans, fontSize: ".72rem", letterSpacing: ".2em",
    textTransform: "uppercase", color: C.accent, marginBottom: ".5rem",
  }}>
    {t}
  </p>
);