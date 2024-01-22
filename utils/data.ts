import { Locale } from "@/i18n.config";

export const dateFormat = (locale: Locale) =>
  new Intl.DateTimeFormat(`${locale}-CA`, {
    dateStyle: "long",
  });
