import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RetroForge — Marketplace for Homebrew Console Components",
  description: "Connect with retro console component suppliers, PCB fabricators, and design file creators. The marketplace for homebrew console makers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9b413347-d361-4cad-839d-ebef32910d1f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
