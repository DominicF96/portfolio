import Hero from "@/components/Hero";
import SlidingBanner from "@/components/SlidingBanner";
import { Locale } from "@/i18n.config";
import metadata from "./metadata";
import CaseStudies from "@/components/CaseStudies";
import { CenteredContainer, PageContainer } from "@/components/Container";
import Slideshow from "@/components/Slideshow/Slideshow";
import PARTNERS from "@/constants/partners";

type HomePageProps = {
  params: {
    locale: Locale;
  };
};
export const generateMetadata = metadata;

export default function HomePage({ params }: HomePageProps) {
  const { locale } = params;
  return (
    <PageContainer>
      <Hero locale={locale} />
      <CaseStudies locale={locale} />
      <SlidingBanner locale={locale} className="mt-32 md:mt-48" />
    </PageContainer>
  );
}
