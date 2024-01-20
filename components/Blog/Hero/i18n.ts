export interface I18n {
  flavor: {
    part_1: string;
    part_2: string;
    part_3: string;
  };
  title: {
    part_1: string;
  };
  description: string;
}

const en = {
  flavor: {
    part_1: "Hi, I'm",
    part_2: "Dominic",
  },
  title: {
    part_1: "Welcome",
    part_2: "to my Blog",
  },
  description:
    "I write about product strategy, User Experience, Design and Frontend Development. Follow me on my journey to become a Product Owner.",
};

const fr = {
  flavor: {
    part_1: "Bonjour, je suis",
    part_2: "Dominic",
  },
  title: {
    part_1: "Bienvenue",
    part_2: "sur mon Blog",
  },
  description:
    "J'écris sur la stratégie de produit, l'expérience utilisateur, le design et le développement frontend. Suivez-moi dans mon parcours pour devenir un Product Owner.",
};

export default { en, fr };
