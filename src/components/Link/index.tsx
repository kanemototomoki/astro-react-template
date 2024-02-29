import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { container } from "./style.css.ts";

type Props = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

const Link: FC<Props> = ({ children, ...rest }) => {
  return (
    <a {...rest} className={container}>
      {children}
    </a>
  );
};

export default Link;
