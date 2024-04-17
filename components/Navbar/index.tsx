"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import socials from "@/constants/socials";
import Link from "next/link";
import { Sling as Hamburger } from "hamburger-react";
import navbarLinks from "@/constants/links";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";
import { CenteredContainer } from "../Container";
import Socials from "../Socials";
import injectLocaleIfBlog from "@/utils/links";

type Props = {
  locale: Locale;
};

function Navbar({ locale }: Props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 m-auto bg-background/80 py-4">
      <CenteredContainer className="flex items-center">
        <Link href="/" className="flex items-center">
          <Avatar className="inline-block mr-4 h-11 w-11">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/36671850?v=4"
              alt="@DominicF96"
            />
            <AvatarFallback
              className="bg-primary text-primary-foreground font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              DF
            </AvatarFallback>
          </Avatar>
          <span className="whitespace-nowrap" style={{ fontSize: "20px" }}>
            Dominic Fournier
          </span>
        </Link>
        <Button
          variant="link"
          className="md:hidden ml-auto pr-0"
          onClick={() => setOpen(!isOpen)}
        >
          <Hamburger
            toggled={isOpen}
            color="white"
            toggle={setOpen}
            size={24}
          />
        </Button>
        <NavbarDesktopLinks locale={locale} />
        <NavbarMobileDrawer locale={locale} isOpen={isOpen} />
      </CenteredContainer>
    </nav>
  );
}

type NavbarMobileDrawerProps = {
  locale: Locale;
  isOpen: boolean;
};

function NavbarMobileDrawer({ locale, isOpen }: NavbarMobileDrawerProps) {
  const t = i18n[locale];
  return (
    <div
      className={`fixed top-[76px] transition-all	duration-500 ${
        isOpen ? "-left-0" : "left-full"
      } w-full bg-background md:hidden z-50 py-24 px-4 md:p-8 flex flex-col justify-between`}
      style={{ height: "calc(100% - 76px)" }}
    >
      <ul className="flex flex-col gap-2">
        {navbarLinks.map((link) => (
          <li key={link.key}>
            <Link href={injectLocaleIfBlog(link.url, locale)}>
              <Button
                className="-ml-4 rounded-l-none"
                variant="ghost"
                size="lg"
              >
                {t[link.key as keyof typeof t]}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-2 ">
        <li>
          <Socials />
        </li>
        <li>
          <Link href="mailto:hello@dominicfournier.com" className="w-full">
            <Button className="w-full mt-4" size="lg">
              {t.contact}
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

type NavbarDesktopLinksProps = {
  locale: Locale;
};

function NavbarDesktopLinks({ locale }: NavbarDesktopLinksProps) {
  const t = i18n[locale];

  return (
    <div className="hidden md:block ml-8 w-full">
      <ul className="flex justify-between">
        <li>
          <ul className="flex">
            {navbarLinks.map((link) => (
              <li key={link.key}>
                <Link href={injectLocaleIfBlog(link.url, locale)}>
                  <Button variant="ghost">
                    {t[link.key as keyof typeof t]}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="flex items-center">
            <li>
              <Socials />
            </li>
            <li>
              <Link href="mailto:hello@dominicfournier.com">
                <Button className="ml-4">{t.contact}</Button>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
