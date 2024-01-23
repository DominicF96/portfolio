import { Poppins } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import { GoogleAnalytics } from "nextjs-google-analytics";
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
        <GoogleAnalytics trackPageViews />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
