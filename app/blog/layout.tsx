"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { defaultLocale, Locale, locales } from "@/i18n.config";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

function LocalizedLayout({ children }: Props) {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  const locale = current.get("locale") as Locale;
  if (!locale) {
    current.set("locale", defaultLocale);
    const newUrl = `${pathname}?${current.toString()}`;
    router.push(newUrl);
  }

  if (!locale) {
    return null;
  }

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
