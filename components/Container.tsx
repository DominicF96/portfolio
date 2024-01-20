import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function CenteredContainer({ children, className }: ContainerProps) {
  return (
    <div
      className={`relative md:max-w-[1024px] lg:max-w-[1200px] mx-auto px-4 md:px-8 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

function NarrowCenteredContainer({ children, className }: ContainerProps) {
  return (
    <div
      className={`relative md:max-w-[800px] lg:max-w-[800px] mx-auto px-4 md:px-8 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

function PageContainer({ children, className }: ContainerProps) {
  return (
    <main className={`relative pt-32 md:pt-36 ${className || ""}`}>
      {children}
    </main>
  );
}

export { NarrowCenteredContainer, CenteredContainer, PageContainer };
