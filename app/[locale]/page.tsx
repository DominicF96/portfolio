import Hero from "@/components/Hero";
import SlidingBanner from "@/components/SlidingBanner";
import { Locale } from "@/i18n.config";
import metadata from "./metadata";
import CaseStudies from "@/components/CaseStudies";
type HomePageProps = {
  params: {
    locale: Locale;
  };
};
export const generateMetadata = metadata;

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;
  return (
    <main>
      <Hero locale={locale} />
      <SlidingBanner locale={locale} className="mt-32 md:mt-48" />
      <CaseStudies locale={locale} />
    </main>
  );
}
