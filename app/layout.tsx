import { Poppins } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import AnimatedCursor from "react-animated-cursor";
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
          innerSize={12}
          innerStyle={{
            opacity: 0.6,
            backgroundColor: "rgba(92, 214, 173, 0.4)",
            border: "1px solid rgb(92, 214, 173)",
            outline: "1px solid rgba(255,255,255,0.4)",
          }}
          innerScale={10}
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
