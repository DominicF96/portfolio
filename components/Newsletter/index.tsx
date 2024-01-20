import React from "react";
import { H2, P } from "../Typography";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CenteredContainer } from "../Container";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";

type Props = {
  locale: Locale;
};

function Newsletter({ locale }: Props) {
  const t = i18n[locale];
  return (
    <CenteredContainer>
      <div className="relative mt-56 mb-32 bg-primary text-background rounded-xl">
        <Image
          src="/vectors/envelope.svg"
          width={300}
          height={150}
          alt=""
          className="block md:hidden absolute top-0 right-0 translate-y-[-1px] translate-x-[1px]"
        />
        <Image
          src="/vectors/envelope.svg"
          width={300}
          height={200}
          alt=""
          className="hidden md:block lg:hidden absolute top-0 right-0 translate-y-[-1px] translate-x-[1px]"
        />
        <Image
          src="/vectors/envelope.svg"
          width={480}
          height={300}
          alt=""
          className="hidden lg:block absolute top-0 right-0 translate-y-[-1px] translate-x-[1px]"
        />
        <div className="pt-64 sm:pt-56 pb-12 px-8 md:py-40 md:pb-24 lg:pt-32 md:px-24">
          <H2 className="font-extrabold">{t.title}</H2>
          <P className="text-lg md:max-w-[380px]">{t.description}</P>
          <div className="mt-8 flex flex-col md:flex-row gap-2 md:max-w-[400px]">
            <Input placeholder={t.placeholder} />
            <Button className="bg-background text-white hover:bg-white hover:text-background">
              {t.action}
            </Button>
          </div>
        </div>
      </div>
    </CenteredContainer>
  );
}

export default Newsletter;
