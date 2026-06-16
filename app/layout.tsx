import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Training & Automation Services for Business Teams | Zara",
  description:
    "Practical AI training, workflow automation, and enablement for leaders and teams who want to turn AI into repeatable business systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
