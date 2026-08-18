import ResumeWindow from "@/components/resume";
import SafariWindow from "@/components/safari";
import TerminalWindow from "@/components/terminal";

export default function Home() {
  return (
    <main>
      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
    </main>
  );
}
