export interface NavbarLink {
  key: string;
  url: string;
}

const navbarLinks = [
  { key: "home", url: "/" },
  { key: "blog", url: "https://blog.dominicfournier.com" },
];

export default navbarLinks;
