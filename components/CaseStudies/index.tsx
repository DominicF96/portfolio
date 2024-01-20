import React from "react";
import { H2 } from "../Typography";
import { CenteredContainer } from "../Container";
import CaseStudyRow from "./CaseStudyRow";
import caseStudies from "@/constants/case.studies";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";

type Props = {
  locale: Locale;
};

function CaseStudies({ locale }: Props) {
  const t = i18n[locale];
  return (
    <div>
      <CenteredContainer className="mt-48">
        <H2 id="case_studies">{t.title}</H2>
      </CenteredContainer>
      <div className="mt-16">
        {caseStudies.map((caseStudy) => (
          <CaseStudyRow
            key={caseStudy.id}
            locale={locale}
            caseData={caseStudy}
          />
        ))}
      </div>
    </div>
  );
}

export default CaseStudies;
