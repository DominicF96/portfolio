"use client";
import React, { useState, useEffect, useRef } from "react";
import { H3, Muted, P } from "../Typography";
import { CenteredContainer } from "../Container";
import i18n from "./i18n";
import { Locale } from "@/i18n.config";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { CaseStudy } from "@/constants/case.studies";
import { format, parseISO } from "date-fns";
import { enUS, frCA } from "date-fns/locale";
import "./index.css";

type Props = {
  caseData: CaseStudy;
  locale: Locale;
};

function CaseStudyRow({ caseData, locale }: Props) {
  const t = i18n[locale];
  const [isInView, setIsInView] = useState(false);
  const rowRef = useRef<any>(null);

  useEffect(() => {
    const checkIfInView = () => {
      if (rowRef.current) {
        const rect = rowRef.current.getBoundingClientRect();
        if (
          // Check if the component is less than 45% from the top of the viewport
          rect.top < window.innerHeight * 0.45 &&
          rect.top > window.innerHeight * 0.45 - rect.height
        ) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", checkIfInView);

    // Initial check in case the component is already in view on initial render
    checkIfInView();

    return () => {
      // Cleanup
      window.removeEventListener("scroll", checkIfInView);
    };
  }, []);

  const collapsibleStyle = {
    display: "grid",
    transition: "grid-template-rows 500ms",
    width: "100%",
    minHeight: "10px",
  };

  const collapsibleClosedStyle = {
    gridTemplateRows: "0fr",
  };

  const collapsibleOpenStyle = {
    gridTemplateRows: "1fr",
  };

  const dateLocalMap = {
    en: enUS,
    fr: frCA,
  };

  // Adjust className and style based on isInView instead of hover
  return (
    <div
      className={`transition-all text-foreground duration-500 ${
        isInView ? "bg-primary/10" : ""
      }`}
      ref={rowRef} // Attach ref
    >
      <CenteredContainer className="relative">
        <div
          className={`absolute z-10 right-0 pointer-events-none transition-all duration-500 ${
            isInView ? "opacity-100 top-16" : "opacity-0 top-24"
          }`}
        >
          <div className="border border-primary max-h-[600px] overflow-hidden rounded-lg shadow-2xl pointer-events-none hidden lg:block">
            <Image
              src={`/images/cases/${caseData.id}.png`}
              width={500}
              height={400}
              alt={t.cases[caseData.id as keyof typeof t.cases].title}
            />
          </div>
        </div>
      </CenteredContainer>
      <div
        className={`relative py-16 border border-primary border-l-0 border-r-0 ${
          isInView ? "bg-primary/10" : ""
        }`}
        style={{ marginTop: "-1px" }}
      >
        <CenteredContainer>
          <H3>{t.cases[caseData.id as keyof typeof t.cases].title}</H3>
          <span>
            <time>
              {format(parseISO(caseData.date), "PPP", {
                locale: dateLocalMap[locale],
              })}
            </time>
          </span>
          <div
            style={
              isInView
                ? { ...collapsibleStyle, ...collapsibleOpenStyle }
                : { ...collapsibleStyle, ...collapsibleClosedStyle }
            }
          >
            <div>
              <P className="mt-4 md:max-w-[325px] lg:max-w-[450px]">
                {t.cases[caseData.id as keyof typeof t.cases].description}
              </P>
              <div className="my-8 border border-primary max-h-[600px] overflow-hidden rounded-lg shadow-2xl pointer-events-none block lg:hidden">
                <Image
                  src={`/images/cases/${caseData.id}.png`}
                  width={500}
                  height={400}
                  className={`transition-all duration-500 w-full ${
                    isInView ? "brightness-100" : "brightness-50"
                  }`}
                  alt={t.cases[caseData.id as keyof typeof t.cases].title}
                />
              </div>
              <div className="mt-8 flex flex-col md:flex-row gap-2">
                <Button variant="outline" className={`shadow-none`} asChild>
                  <Link href={`/case/${caseData.id}`}>
                    {t.see_case_study}
                    <ArrowRightIcon className="ml-4" />
                  </Link>
                </Button>
                {caseData.url && (
                  <Button asChild variant="ghost" className={`shadow-none`}>
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
    </div>
  );
}

export default CaseStudyRow;
