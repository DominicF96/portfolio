import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-[1024px] mx-auto px-8 ${className || ""}`}>
      {children}
    </div>
  );
}

export default Container;
