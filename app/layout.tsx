import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taraz Tea — সরাসরি চা বাগান থেকে মানসম্মত চা",
  description:
    "Taraz Tea — প্রকৃতির স্বাদ, আপনার প্রাঙ্গনে। সরাসরি চা বাগান থেকে সংগৃহীত মানসম্মত চা।",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
