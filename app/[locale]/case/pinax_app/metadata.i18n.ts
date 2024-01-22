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
  title: "Dominic | CS • Pinax Web Platform",
  description:
    "Hi, my name is Dominic. In this case study I will share with you my key learnings in building Pinax's Web Platform.",
  keywords:
    "Case Study, Pinax, Webapp, web3, blockchain, services, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Dominic | CS • Plateforme Web Pinax",
  description:
    "Bonjour, je m'appelle Dominic. J'écris sur la stratégie de produit, l'expérience utilisateur, le design et le développement frontend. Suivez-moi dans mon parcours pour devenir Product Owner.",
  keywords:
    "Case Study, Pinax, Webapp, web3, blockchain, services, Dominic, Fournier, Développeur, Designer, Product Owner",
};
