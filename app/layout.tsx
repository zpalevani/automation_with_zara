import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arete Systems | AI Workflow Automation for Business Operations Teams",
  description:
    "Arete Systems helps business, client success, sales operations, and delivery teams turn AI into practical workflows, stronger execution, and repeatable operating systems.",
  keywords: [
    "AI workflow readiness scorecard",
    "business operations AI workflow automation",
    "client success AI workflows",
    "sales operations AI workflows",
    "AI Operations Workflow Sprint",
  ],
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
