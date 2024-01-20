import React from "react";
import Navbar from "@/components/Navbar";
import { Locale, locales } from "@/i18n.config";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

type Props = {
  children: React.ReactNode;
};

function LocalizedLayout({ children }: Props) {
  return (
    <div>
      <Navbar locale={locales[0]} />
      {children}
      <Newsletter locale={locales[0]} />
      <Footer locale={locales[0]} />
    </div>
  );
}

export default LocalizedLayout;
