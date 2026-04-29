import { type FC, type ReactNode, type CSSProperties } from "react";
import { useInView } from "../../hooks/useInView";

interface Props {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}

export const FadeIn: FC<Props> = ({ children, delay = 0, style = {} }) => {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : "translateY(28px)",
        transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

