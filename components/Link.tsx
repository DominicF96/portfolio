import { SquareArrowOutUpRight, Link2, ChevronRight } from "lucide-react";
import React from "react";

export type LinkProps = {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?:
    | "noreferrer"
    | "noopener"
    | "nofollow"
    | "noreferrer noopener"
    | "noreferrer nofollow"
    | "noopener nofollow"
    | "noreferrer noopener nofollow";
  children: React.ReactNode;
  className?: string;
  component?: React.ElementType;
  style?: React.CSSProperties;
  unstyled?: boolean;
  showLinkIcon?: boolean;
  showCaretIcon?: boolean;
};

export default function Link({
  href,
  target,
  rel,
  children,
  className,
  style,
  component,
  unstyled = false,
  showLinkIcon = false,
  showCaretIcon = false,
}: LinkProps) {
  if (!href) {
    throw new Error('Link: "href" is required');
  }

  const LinkComponent = component || "a";

  const getLinkIcon = () => {
    if (!showLinkIcon) return null;
    if (target?.indexOf("_blank") !== -1) {
      return (
        <SquareArrowOutUpRight
          height={18}
          width={18}
          className="inline-block mr-2"
        />
      );
    } else {
      return <Link2 height={18} width={18} className="inline-block mr-2" />;
    }
  };

  const getCaretIcon = () => {
    if (!showCaretIcon) return null;
    return (
      <ChevronRight height={18} width={18} className="inline-block ml-2" />
    );
  };

  if (href.toString().startsWith("http")) {
    return (
      <a
        href={href.toString()}
        target={"_blank"}
        rel={"noreferrer"}
        className={
          !unstyled ? `hover:text-white ${className || ""}` : className || ""
        }
        style={{
          display: "inline-block",
          ...style,
        }}
      >
        {getLinkIcon()}
        {children}
        {getCaretIcon()}
      </a>
    );
  } else {
    return (
      <LinkComponent
        href={href}
        target={target}
        rel={rel}
        className={
          !unstyled ? `hover:text-white ${className || ""}` : className || ""
        }
        style={{
          display: "inline-block",
          ...style,
        }}
      >
        {getLinkIcon()}
        {children}
        {getCaretIcon()}
      </LinkComponent>
    );
  }
}