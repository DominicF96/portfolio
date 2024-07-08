export interface I18n {
  flavor: {
    part_1: string;
    part_2: string;
  };
  title: {
    part_1: string;
    part_2: string;
  };
  description: string;
  cta: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  trusted_by: string;
}

const en = {
  flavor: {
    part_1: "Hi, I'm",
    part_2: "Dominic",
  },
  title: {
    part_1: "Product Designer,",
    part_2: "Frontend Developer",
  },
  description: (years: number | string) =>
    `With over ${years} years of experience in Product Design and Frontend development, I specialize in coordinating Agile teams to build intuitive, feature-rich dashboards and websites.`,
  cta: {
    primary: "Contact me",
    secondary: "Projects",
  },
  trusted_by: "Trusted by",
};

const fr = {
  flavor: {
    part_1: "Bonjour, je suis",
    part_2: "Dominic",
  },
  title: {
    part_1: "Designer Produit,",
    part_2: "Développeur Frontend",
  },
  description: (years: number | string) =>
    `Avec plus de ${years} ans d'expérience en design de produit et développement Frontend, je me spécialise dans la coordination d'équipes Agiles pour construire des tableaux de bord et des sites web intuitifs et riches en fonctionnalités.`,
  cta: {
    primary: "Contactez-moi",
    secondary: "Projets",
  },
  trusted_by: "Ils me font confiance",
};

export default { en, fr };
