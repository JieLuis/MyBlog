import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import "@radix-ui/themes/styles.css";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="light" accentColor="sky" radius="small">
          <NavBar />
          <main className="p-5 bg-teal-50">
            <Container>{children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
