export interface I18n {
  frontend: {
    title: string;
    description: string;
  };
  ux: {
    title: string;
    description: string;
  };
  team_player: {
    title: string;
    description: string;
  };
}

const en = {
  frontend: {
    title: "Frontend",
    description:
      "Through the years, I have developed a strong expertise in Frontend Development, with a focus on Next.js, React, JavaScript, TypeScript, CSS and much more.",
  },
  ux: {
    title: "UI & UX",
    description:
      "As a UX Design advocate, I excel in creating holistic user journeys, from high-level strategy to UI details, and am passionate about complex Design Systems and User-Centered Design.",
  },
  team_player: {
    title: "Team Player",
    description:
      "My multidisciplinary background has made me a versatile team player, able to bridge the gap between design and development, and to communicate effectively with stakeholders.",
  },
};

const fr = {
  frontend: {
    title: "Frontend",
    description:
      "Au fil des ans, j'ai développé une solide expertise en développement Frontend, avec un accent sur Next.js, React, JavaScript, TypeScript, CSS et bien plus encore.",
  },
  ux: {
    title: "UI & UX",
    description:
      "En tant que défenseur du UX Design, j'excelle dans la création de parcours utilisateur holistiques, de la stratégie de haut niveau aux détails de l'interface utilisateur, et je suis passionné par les systèmes de design complexes et la conception centrée sur l'utilisateur.",
  },
  team_player: {
    title: "Joueur d'équipe",
    description:
      "Mon parcours multidisciplinaire m'a permis de devenir un joueur d'équipe polyvalent, capable de combler le fossé entre la conception et le développement, et de communiquer efficacement avec les parties prenantes.",
  },
};

export default { en, fr };
