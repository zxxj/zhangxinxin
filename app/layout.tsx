import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Dock from "@/components/dock";

export const metadata: Metadata = {
  title: "zhangxinxin",
  description: "my blog~",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Dock />
      </body>
    </html>
  );
}
