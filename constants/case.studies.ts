export interface CaseStudy {
  id: string;
  date: string;
  url?: string;
  score: number;
}

const caseStudies = [
  {
    id: "streamingfast_substreams_registry",
    url: "https://substreams.dev",
    date: "2024-02-01",
    score: 7,
  },
  {
    id: "pinax_app",
    url: "https://app.pinax.network",
    date: "2023-11-01",
    score: 8,
  },
  {
    id: "eosnation_ens",
    url: "https://eosnameservice.io",
    date: "2023-08-01",
    score: 6,
  },
  {
    id: "pinax_website",
    url: "https://pinax.network",
    date: "2023-05-01",
    score: 6,
  },
  // {
  //   id: "pinax_subtivity",
  //   date: "2023-03-01",
  //   score: 4,
  // },
  {
    id: "eosnation_spyglass",
    url: "https://spyglass.network",
    date: "2023-01-01",
    score: 4,
  },
  {
    id: "oreus_website",
    url: "https://oreus.ca",
    date: "2022-11-01",
    score: 7,
  },
];

export default caseStudies;
