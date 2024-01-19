import React from "react";
import { H2 } from "../Typography";
import Container from "../Container";
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
      <Container className="mt-48">
        <H2>{t.title}</H2>
      </Container>
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
