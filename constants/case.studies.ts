export interface CaseStudy {
  id: string;
  date: string;
  score: number;
};

const caseStudies = [
  {
    id: "streamingfast_substreams_registry",
    date: "2024-02-01",
    score: 7,
  },
  {
    id: "pinax_app",
    date: "2023-11-01",
    score: 8,
  },
  {
    id: "eosnation_ens",
    date: "2023-08-01",
    score: 6,
  },
  {
    id: "pinax_website",
    date: "2023-05-01",
    score: 6,
  },
  {
    id: "pinax_subtivity",
    date: "2023-03-01",
    score: 4,
  },
  {
    id: "eosnation_spyglass",
    date: "2023-01-01",
    score: 4,
  },
  {
    id: "oreus_website",
    date: "2022-11-01",
    score: 7,
  },
];

export default caseStudies;