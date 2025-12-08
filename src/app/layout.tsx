import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { ThemeProvider } from "next-themes";
import AOSInitializer from "./Aos";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Pearl — Frontend Developer",
  description:
    "Pearl’s portfolio showcasing frontend development skills, projects, experience, and creative work in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolageGrotesque.className} dark:bg-[#080e29]`}>
      <ThemeProvider attribute="class">
        <Header />
<AOSInitializer />

        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
