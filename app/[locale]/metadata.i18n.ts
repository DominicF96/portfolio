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
  title: "Dominic | PO • Frontend • Designer",
  description:
    "Hi, my name is Dominic. I'm Developer with Design and Product Ownership experience, I specialize in coordinating multidisciplinary agile teams to build stunning, feature-rich Web Apps.",
  keywords: "Portfolio, Dominic, Fournier, Developer, Designer, Product Owner",
};

export const fr = {
  title: "Dominic | PO • Frontend • Designer",
  description:
    "Bonjour, je m'appelle Dominic. Je suis Développeur avec de l'expérience en Design et Product Ownership, je me spécialise dans la coordination d'équipes agiles multidisciplinaires pour construire des applications Web sensationnelles et riches en fonctionnalités.",
  keywords:
    "Portfolio, Dominic, Fournier, Développeur, Designer, Product Owner",
};