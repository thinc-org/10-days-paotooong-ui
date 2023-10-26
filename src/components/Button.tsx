import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "text-xl text-white px-4 py-3 rounded-lg hover:brightness-95 transition duration-150",
  variants: {
    color: {
      green: "bg-btn-extend-green",
      yellow: "bg-btn-extend-yellow",
      blue: "bg-btn-extend-blue",
    },
  },
});

const Button = ({
  children,
  color,
}: {
  children: ReactNode;
  color: "green" | "yellow" | "blue";
}) => {
  return <button className={button({ color })}>{children}</button>;
};

export default Button;
