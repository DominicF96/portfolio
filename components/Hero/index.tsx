"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CenteredContainer } from "../Container";
import { H1, Lead, P } from "../Typography";
import { Button } from "../ui/button";
import ScrollCTA from "../ScrollCTA";
import { Locale } from "@/i18n.config";
import HeroGraphic from "../HeroGraphic";
import i18n from "./i18n";

type Props = {
  locale: Locale;
};

function Hero({ locale }: Props) {
  const t = i18n[locale];
  const router = useRouter();
  return (
    <CenteredContainer>
      <div className="relative z-40">
        <Lead>
          {t.flavor.part_1}&nbsp;
          <span className="font-bold">{t.flavor.part_2}</span>.
        </Lead>
        <H1 className="font-black">
          {t.title.part_1}
          <br />
          <span className="text-primary">{t.title.part_2}</span>
        </H1>
        <P className="mt-4 max-w-[465px]">{t.description}</P>
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Button
            size="lg"
            className="w-fit"
            onClick={() => router.push("#case_studies")}
          >
            {t.cta.primary}
          </Button>
          <Button
            size="lg"
            className="w-fit"
            variant="outline"
            onClick={() => router.push("/blog")}
          >
            {t.cta.secondary}
          </Button>
        </div>
        <ScrollCTA locale={locale} className="mt-11 md:mt-28" />
      </div>
      <HeroGraphic />
    </CenteredContainer>
  );
}

export default Hero;
