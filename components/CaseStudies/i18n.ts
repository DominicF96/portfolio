export interface I18n {
  title: string;
  see_case_study: string;
  open: string;
  cases: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
}

const en = {
  title: "Case Studies",
  see_case_study: "See Case Study",
  open: "Open",
  cases: {
    dominicf96_portfolio_2024: {
      title: "Dominic Fournier • Portfolio & Blog 2024",
      description:
        "You are Here! This is the 3rd version of my personal portfolio. Built with Next.js and Tailwind CSS, it is also much more representative of my current skills.",
    },
    pinax_app: {
      title: "Pinax • Web Platform",
      description:
        "Pinax's cloud services platform allows users to access various decentralized services, such as RPC endpoints, Firehose, and Substreams.",
    },
    eosnation_ens: {
      title: "EOS Nation • Name Service",
      description:
        "EOS Nation's name service allows users to associate domain names with EOSIO wallet addresses.",
    },
    pinax_website: {
      title: "Pinax • Website",
      description:
        "Pinax's website showcases the various services offered by the company.",
    },
    pinax_subtivity: {
      title: "Pinax • Subtivity",
      description:
        "Subtivity is an experimental project by Pinax to demonstrate the power of Substreams by accessing real-time Blockchain data.",
    },
    eosnation_spyglass: {
      title: "EOS Nation • Spyglass",
      description:
        "Spyglass is a decentralized transaction traces explorer. A transaction trace allows you to follow a transaction attempt on the Blockchain, before it is validated.",
    },
    oreus_website: {
      title: "Oreus",
      description:
        "Oreus is a web product development consulting company that I co-founded in 2021.",
    },
    streamingfast_substreams_registry: {
      title: "StreamingFast • Substreams Registry",
      description:
        "StreamingFast's Substreams Registry allows users to access an inventory of Substreams packages to extract data from the Blockchain in a modular way.",
    },
    fanslab_webapp: {
      title: "Fanslab • Web Platform",
      description:
        "Fanslab offers a community management platform for networking events. I built the first version of the web application's Frontend in less than a month.",
    },
  },
};

const fr = {
  title: "Études de cas",
  see_case_study: "Voir l'étude de cas",
  open: "Ouvrir",
  cases: {
    dominicf96_portfolio_2024: {
      title: "Dominic Fournier • Portfolio & Blog 2024",
      description:
        "Vous êtes ici! Il s'agit de la 3e version de mon portfolio personnel. Construit avec Next.js et Tailwind CSS, il est également beaucoup plus représentatif de mes compétences actuelles.",
    },
    pinax_app: {
      title: "Pinax • Plateforme Web",
      description:
        "La plateforme web de Pinax permet à ses utilisateurs d'accéder à différents services décentralisés, tels que des points d'accès RPC, Firehose et Substreams.",
    },
    eosnation_ens: {
      title: "EOS Nation • Name Service",
      description:
        "Le service de nom EOS Nation permet à ses utilisateurs d'associer des noms de domaine à des adresses de portefeuille EOSIO.",
    },
    pinax_website: {
      title: "Pinax • Site Web",
      description:
        "Le site web de Pinax présente les différents services offerts par l'entreprise.",
    },
    pinax_subtivity: {
      title: "Pinax • Subtivity",
      description:
        "Subtivity est un projet expérimental de Pinax pour démontrer la puissance de Substreams en accédant à des données de la Blockchain en temps réel.",
    },
    eosnation_spyglass: {
      title: "EOS Nation • Spyglass",
      description:
        "Spyglass est un explorateur traces de transactions décentralisées. Une trace de transaction permet de suivre une tentative de transaction sur la Blockchain, avant qu'elle ne soit validée.",
    },
    oreus_website: {
      title: "Oreus",
      description:
        "Oreus est une entreprise de services-conseils en développement de produits web que j'ai co-fondé en 2021.",
    },
    streamingfast_substreams_registry: {
      title: "StreamingFast • Registre Substreams",
      description:
        "Le registre des Substreams de StreamingFast permet à ses utilisateurs d'accéder à un inventaire de paquets Substreams permettant d'extraire des données de la Blockchain de façon modulaire.",
    },
    fanslab_webapp: {
      title: "Fanslab • Plateforme Web",
      description:
        "Fanslab offre une plateforme de gestion de communautés pour les événements de réseautage. J'ai bâti la première version du Frontend de l'application web en moins d'un mois.",
    },
  },
};

export default { en, fr };
