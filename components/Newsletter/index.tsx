"use client";
import React, { useEffect, useRef, useState } from "react";
import { H2, P, Small } from "../Typography";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CenteredContainer } from "../Container";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import i18n from "./i18n";
import { toast } from "sonner";

type Props = {
  locale: Locale;
};

function Newsletter({ locale }: Props) {
  const t = i18n[locale];
  const newsletterRef = useRef<HTMLDivElement>(null); // Ref for the newsletter div
  const [email, setEmail] = useState("");
  const emailRe =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const isEmailValid = emailRe.test(email);

  const handleEmailSubmit = async () => {
    if (isEmailValid) {
      console.log("Submitting email", email);
      await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            toast.success(t.success);
          } else {
            throw new Error("Unable to subscribe to newsletter");
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error(t.error.subscribe);
        });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (newsletterRef.current) {
        const newsletterPosition =
          newsletterRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const visibleArea = newsletterPosition - windowHeight;

        // Adjust scale based on visibility
        let scale, translateY;
        if (visibleArea < 0) {
          // Calculate the percentage of the newsletter that is visible
          let visiblePercentage = newsletterPosition / windowHeight;
          scale = 0.9 + 0.6 * (1 - visiblePercentage);
          translateY = 150 * (1 - visiblePercentage) - 150; // Adjust Y position based on visibility
        } else {
          scale = 0.9; // Default scale when not in viewport
          translateY = -150; // No translation when not in viewport
        }

        newsletterRef.current.style.transform = `scale(${Math.min(
          Math.max(scale, 0.8),
          1.05
        )}) translateY(${translateY}px)`;
        newsletterRef.current.style.opacity = `${Math.max(scale - 0.2, 0.6)}`;
      } else {
        console.error("Newsletter ref not found");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CenteredContainer>
      <div
        ref={newsletterRef}
        className="relative z-10 mt-56 mb-32 bg-primary text-background rounded-xl"
      >
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
          <div className="mt-8 flex flex-row md:max-w-[400px]">
            <Input
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-background text-background placeholder:text-background placeholder:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background rounded-r-none"
            />
            <Button
              disabled={!isEmailValid || !email || email.length <= 0}
              onClick={handleEmailSubmit}
              className="bg-background text-white hover:bg-white hover:text-background rounded-l-none"
            >
              {t.action}
            </Button>
          </div>
          {!isEmailValid && email && email.length > 0 && (
            <div className="pt-4">
              <Small className="text-background">{t.error.email_invalid}</Small>
            </div>
          )}
        </div>
      </div>
    </CenteredContainer>
  );
}

export default Newsletter;
