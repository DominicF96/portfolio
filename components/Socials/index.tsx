import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import socials from "@/constants/socials";

type Props = {
  className?: string;
};

const SocialsLogoMap = (social: string) => {
  switch (social) {
    case "github":
      return <GitHubLogoIcon color="#69D17E" height={24} width={24} />;
    case "linkedin":
      return <LinkedInLogoIcon color="#69D17E" height={24} width={24} />;
    case "twitter":
      return <TwitterLogoIcon color="#69D17E" height={24} width={24} />;
    default:
      return null;
  }
};

function Socials({ className }: Props) {
  return (
    <ul className={`flex gap-2 ${className || ""}`}>
      {socials.map((social) => (
        <li key={social.name}>
          <Link href={social.url} target="_blank">
            <Button variant="link" className="px-2" aria-label="Github">
              {SocialsLogoMap(social.name)}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
