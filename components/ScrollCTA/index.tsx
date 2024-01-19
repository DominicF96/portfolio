import React from "react";
import { Locale, locales } from "@/i18n.config";
import ScrollEN from "./ScrollEN";
import ScrollFR from "./ScrollFR";
type Props = {
  locale: Locale;
  className?: string;
};

function ScrollCTA({ locale, className }: Props) {
  const LocaleScrollSVG = () => {
    switch (locale) {
      case "fr":
        return <ScrollFR />;
      default:
        return <ScrollEN />;
    }
  };

  return <div className={className || ""}>{LocaleScrollSVG()}</div>;
}

export default ScrollCTA;
