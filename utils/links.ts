import { Locale } from "@/i18n.config";

const injectLocaleIfBlog = (url: string, locale: Locale) => {
  if (url === "/blog") {
    return `/blog?locale=${locale}`;
  }
  return url;
};

export default injectLocaleIfBlog;