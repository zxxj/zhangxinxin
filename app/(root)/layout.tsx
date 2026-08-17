import "../globals.css";
import Nav from "@/components/nav";
import Dock from "@/components/dock";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Nav />
      {children}
      <Dock />
    </>
  );
}
