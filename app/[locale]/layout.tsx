import React from "react";
import Navbar from "@/components/Navbar";
import { Locale } from "@/i18n.config";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

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
      <Image
        src="/vectors/bg.svg"
        height={1200}
        width={1200}
        alt=""
        className="fixed z-0 -top-96 -right-96 blur-[200px] animate-spin"
        style={{ animationDuration: "30s" }}
      />
      {children}
      <Newsletter locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}

export default LocalizedLayout;
