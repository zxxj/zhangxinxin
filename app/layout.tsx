import "./globals.css";
import type { Metadata } from "next";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

export const metadata: Metadata = {
  title: "zhangxinxin",
  description: "my blog~",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
