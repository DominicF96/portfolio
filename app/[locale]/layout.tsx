import React from "react";
import Navbar from "@/components/Navbar";
import { Locale } from "@/i18n.config";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

type Props = {
  params: {
    locale: Locale;
  };
  children: React.ReactNode;
};

function LocalizedLayout({ params, children }: Props) {
  const { locale } = params;
  return (
    <div>
      <Navbar locale={locale} />
      <div className="relative z-30">
        <Image
          src="/vectors/bg.svg"
          height={2500}
          width={2500}
          alt=""
          className="fixed z-0 top-1/2 left-1/2 blur-[250px] animate-spin"
          style={{ animationDuration: "30s" }}
        />
        {children}
        <Newsletter locale={locale} />
        <ContactForm locale={locale} />
        <Footer locale={locale} />
        <div
          className="absolute top-0 left-0 w-full h-full z-0 bg-repeat bg-blend-multiply mix-blend-multiply pointer-events-none opacity-40"
          style={{ background: "url(/images/noise.png)" }}
        />
      </div>
    </div>
  );
}

export default LocalizedLayout;
