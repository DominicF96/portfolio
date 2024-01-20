"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CenteredContainer } from "../../Container";
import { H1, Lead, P } from "../../Typography";
import ScrollCTA from "../../ScrollCTA";
import { Locale } from "@/i18n.config";
import HeroGraphic from "../../HeroGraphic";
import i18n from "./i18n";

type Props = {
  locale: Locale;
};

function BlogHero({ locale }: Props) {
  const t = i18n[locale];
  const router = useRouter();
  return (
    <CenteredContainer>
      <div className="relative z-40">
        <Lead>
          {t.flavor.part_1}&nbsp;
          <span className="font-bold">{t.flavor.part_2}</span>.&nbsp;
        </Lead>
        <H1 className="font-black">
          {t.title.part_1}
          <br />
          <span className="text-primary">{t.title.part_2}</span>
        </H1>
        <P className="mt-4 max-w-[465px]">{t.description}</P>
      </div>
      <HeroGraphic/>
    </CenteredContainer>
  );
}

export default BlogHero;
