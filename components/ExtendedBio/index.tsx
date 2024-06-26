import React from "react";
import { H3, P } from "../Typography";
import { CenteredContainer } from "../Container";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";

type Props = { locale: Locale };

function ExtendedBio({ locale }: Props) {
  const t = i18n[locale];
  return (
    <CenteredContainer>
      <div className="flex flex-col md:flex-row justify-between align-top gap-8 md:gap-16 mt-80 md:mt-48">
        <div>
          <H3>{t.frontend.title}</H3>
          <P className="!mt-0 text-muted">{t.frontend.description}</P>
        </div>
        <div>
          <H3>{t.ux.title}</H3>
          <P className="!mt-0 text-muted">{t.ux.description}</P>
        </div>
        <div>
          <H3>{t.team_player.title}</H3>
          <P className="!mt-0 text-muted">{t.team_player.description}</P>
        </div>
      </div>
    </CenteredContainer>
  );
}

export default ExtendedBio;
