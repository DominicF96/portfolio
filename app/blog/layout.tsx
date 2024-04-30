import React from "react";
import Navbar from "@/components/Navbar";
import { Locale, locales } from "@/i18n.config";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

function LocalizedLayout({ children }: Props) {
  return (
    <div>
      <Navbar locale={locales[0]} />
      <Image
        src="/vectors/bg.svg"
        height={1200}
        width={1200}
        alt=""
        className="fixed z-0 -top-96 -right-96 blur-[200px] animate-spin"
        style={{ animationDuration: "30s" }}
      />
      {children}
      <Newsletter locale={locales[0]} />
      <Footer locale={locales[0]} />
    </div>
  );
}

export default LocalizedLayout;
