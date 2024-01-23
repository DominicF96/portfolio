"use client";
import React, { useState } from "react";
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
            <Input
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              disabled={!isEmailValid || !email || email.length <= 0}
              onClick={handleEmailSubmit}
              className="bg-background text-white hover:bg-white hover:text-background"
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
