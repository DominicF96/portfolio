import React from "react";
import Navbar from "@/components/Navbar";
import { Locale } from "@/i18n.config";

type Props = {
  params: {
    locale: Locale;
  };
  children: React.ReactNode;
};

function LocalizedLayout({ params, children }: Props) {
  return (
    <div>
      <Navbar locale={params.locale} />
      {children}
    </div>
  );
}

export default LocalizedLayout;
