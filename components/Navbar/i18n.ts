export interface I18n {
  home: string;
  case_study: string;
  dashboard_template: string;
  blog: string;
  contact: string;
}

const en = {
  home: "Home",
  case_study: "Projects",
  dashboard_template: "Dashboard Template",
  blog: "Blog",
  contact: "Contact me",
};

const fr = {
  home: "Accueil",
  case_study: "Projets",
  dashboard_template: "Modèle de tableau de bord",
  blog: "Blog",
  contact: "Contactez-moi",
};

export default { en, fr };
