import { PageMetadataI18n } from "@/types";

export interface HomeI18n {
  metadata: PageMetadataI18n;
}

export interface I18n {
  title: string;
  description: string;
  keywords: string;
}

export const en = {
  title: "Dominic | Blog",
  description:
    "Hi, my name is Dominic. I write about product strategy, User Experience, Design and Frontend Development. Follow me on my journey to become a Product Owner.",
  keywords: "Blog, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Dominic | Blog",
  description:
    "Bonjour, je m'appelle Dominic. J'écris sur la stratégie de produit, l'expérience utilisateur, le design et le développement frontend. Suivez-moi dans mon parcours pour devenir Product Owner.",
  keywords:
    "Blog, Dominic, Fournier, Développeur, Designer, Product Owner",
};