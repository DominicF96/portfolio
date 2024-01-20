import React from "react";
import Navbar from "@/components/Navbar";
import { Locale } from "@/i18n.config";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

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
      {children}
      <Newsletter locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}

export default LocalizedLayout;
