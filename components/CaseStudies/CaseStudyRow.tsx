"use client";
import React, { useState } from "react";
import { H3, Muted, P } from "../Typography";
import { CenteredContainer } from "../Container";
import i18n from "./i18n";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { CaseStudy } from "@/constants/case.studies";
import "./index.css";
import { dateFormat } from "@/utils/data";

type Props = {
  caseData: CaseStudy;
  locale: Locale;
};

function CaseStudyRow({ caseData, locale }: Props) {
  const t = i18n[locale];

  const [isHovered, setIsHovered] = useState(false);

  const date = new Date(caseData.date);

  return (
    <Link
      href={`/case/${caseData.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="collapsible_container"
    >
      <CenteredContainer className="relative">
        <div
          className={`absolute z-10 right-0  duration-500 transition-all pointer-events-none ${
            isHovered ? "opacity-100 top-16" : "opacity-0 top-24"
          }`}
        >
          <div className="border border-primary max-h-[600px] overflow-hidden rounded-lg shadow-2xl pointer-events-none">
            <Image
              src={`/images/cases/${caseData.id}.png`}
              className="hidden md:block"
              width={500}
              height={400}
              alt={t.cases[caseData.id as keyof typeof t.cases].title}
            />
          </div>
        </div>
      </CenteredContainer>
      <div
        className="relative py-16 border border-primary border-l-0 border-r-0 transition-colors hover:bg-primary hover:text-background"
        style={{ marginTop: "-1px" }}
      >
        <CenteredContainer>
          <H3>{t.cases[caseData.id as keyof typeof t.cases].title}</H3>
          <Muted>
            <time>{dateFormat(locale).format(date)}</time>
          </Muted>
          <div className="collapsible">
            <div className="transition-none">
              <P className="mt-4 md:max-w-[325px] lg:max-w-[450px] text-background">
                {t.cases[caseData.id as keyof typeof t.cases].description}
              </P>
              <div className="mt-8 flex flex-col md:flex-row gap-2">
                <Button variant="outline" className="hover:bg-white">
                  {t.see_case_study}
                  <ArrowRightIcon className="ml-4" />
                </Button>
                {caseData.url && (
                  <Button
                    asChild
                    variant="default"
                    className="hover:bg-white shadow-none"
                  >
                    <Link
                      href={caseData.url}
                      target={"_blank"}
                      rel="noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {t.open}
                      <ExternalLinkIcon className="ml-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CenteredContainer>
      </div>
    </Link>
  );
}

export default CaseStudyRow;
