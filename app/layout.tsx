import { Poppins } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import AnimatedCursor from "react-animated-cursor"
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ClientProviders>{children}</ClientProviders>
        <AnimatedCursor
          innerSize={8}
          outerSize={32}
          color="92, 214, 173"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          trailingSpeed={0}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
          ]}
        />
      </body>
    </html>
  );
}
