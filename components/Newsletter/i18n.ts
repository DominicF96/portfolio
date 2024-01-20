export interface I18n {
  title: string;
  description: string;
  placeholder: string;
  action: string;
  error: {
    email_invalid: string;
    email_required: string;
  };
}

const en = {
  title: "Get Notified",
  description:
    "Interested in what I do? Subscribe to my newsletter to receive a monthly summary of my recent work.",
  placeholder: "Email",
  action: "Subscribe",
  error: {
    email_invalid: "Please enter a valid email address.",
    email_required: "Please enter an email address.",
  },
};

const fr = {
  title: "Restez informé",
  description:
    "Vous êtes intéressé par ce que je fais? Abonnez-vous à ma newsletter pour recevoir un résumé mensuel de mes travaux récents.",
  placeholder: "Email",
  action: "S'abonner",
  error: {
    email_invalid: "Veuillez saisir une adresse e-mail valide.",
    email_required: "Veuillez saisir une adresse e-mail.",
  },
};

export default { en, fr };
