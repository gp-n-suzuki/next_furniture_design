import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";

export const metadata: Metadata = {
  title: "Furniture Design",
  description: "next.jsでの模写コーディング",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
