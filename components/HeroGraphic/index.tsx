import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

function HeroGraphic({ className }: Props) {
  return (
    <div className={className || ""}>
      <Image
        src="/vectors/circle_deco_profile_desktop.svg"
        width="400"
        height="325"
        alt="me"
        className="hidden md:block absolute z-30 right-0 top-40"
      />
      <Image
        src="/vectors/circle_deco_profile_mobile.svg"
        width="325"
        height="325"
        alt="me"
        className="md:hidden block absolute z-30 right-0 -top-16 sm:right-24 sm:-top-64 sm:scale-150"
      />
    </div>
  );
}

export default HeroGraphic;
