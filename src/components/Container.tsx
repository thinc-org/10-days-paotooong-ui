import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`container px-8 ${className}`}>{children}</div>;
};

export default Container;
