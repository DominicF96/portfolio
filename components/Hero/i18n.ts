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
  }
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
  description:
    "Developer with Design and Product Ownership experience, I specialize in coordinating multidisciplinary agile teams to build stunning, feature-rich Dashboards.",
  cta: {
    primary: "Case Studies",
    secondary: "Blog",
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
  description:
    "Développeur avec de l'expérience en Design et Product Ownership, je me spécialise dans la coordination d'équipes agiles multidisciplinaires pour construire des tableaux de bord sensationnels et riches en fonctionnalités.",
  cta: {
    primary: "Études de cas",
    secondary: "Blog",
  },
  trusted_by: "Ils me font confiance",
};

export default { en, fr };
