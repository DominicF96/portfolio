"use client";
import React, { useState } from "react";
import { H3, Muted, P } from "../Typography";
import Container from "../Container";
import i18n from "./i18n";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import Link from "next/link";
import "./index.css";

type Props = {
  caseData: {
    id: string;
    date: string;
    score: number;
  };
  locale: Locale;
};

function CaseStudyRow({ caseData, locale }: Props) {
  const t = i18n[locale];

  const date = new Date(caseData.date);
  const dateFormat = new Intl.DateTimeFormat(`${locale}-CA`, {
    dateStyle: "long",
  });

  const [isHovered, setIsHovered] = useState(false);
  const handleSetIsHovered = (newState: boolean) => {
    setIsHovered(newState);
    console.log("Hovered: ", newState);
  };
  return (
    <Link
      href={`/case/${caseData.id}`}
      onMouseEnter={() => handleSetIsHovered(true)}
      onMouseLeave={() => handleSetIsHovered(false)}
      className="collapsible_container"
    >
      <Container className="relative">
        <div
          className={`absolute z-10 right-0 top-0 transition-opacity  ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute w-full h-full opacity-20 bg-primary z-20"></div>
          <Image
            src={`/images/cases/${caseData.id}.png`}
            className="grayscale"
            width={400}
            height={400}
            alt={t.cases[caseData.id as keyof typeof t.cases].title}
          />
        </div>
      </Container>
      <div
        className="relative py-16 border border-primary border-l-0 border-r-0 transition-colors hover:bg-primary hover:text-background"
        style={{ marginTop: "-1px" }}
      >
        <Container>
          <H3>{t.cases[caseData.id as keyof typeof t.cases].title}</H3>
          <Muted>{dateFormat.format(date)}</Muted>
          <div className="collapsible">
            <div className="transition-none">
              <P className="mt-4 max-w-[400px] text-background">
                {t.cases[caseData.id as keyof typeof t.cases].description}
              </P>
            </div>
          </div>
        </Container>
      </div>
    </Link>
  );
}

export default CaseStudyRow;
