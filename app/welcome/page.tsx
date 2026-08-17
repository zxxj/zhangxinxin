import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <div className="text-center -mt-30">
        <Image
          src="/images/avatar.jpg"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full"
        />
        <p className="text-white mt-4">zhangxinxin</p>
      </div>

      <div className="fixed bottom-15">
        <Link
          href="/"
          className="relative isolate overflow-hidden rounded-full border border-white/30 bg-white/[0.12] px-12 py-4 text-[13px] font-medium tracking-[0.01em] text-white backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.55),inset_0_-1px_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.2)] transition duration-200 before:pointer-events-none before:absolute before:inset-px before:rounded-full before:bg-[linear-gradient(180deg,rgba(255,255,255,0.44)_0%,rgba(255,255,255,0.13)_42%,rgba(255,255,255,0.02)_100%)] before:content-[''] after:pointer-events-none after:absolute after:inset-x-[18%] after:top-0 after:h-px after:bg-white/80 after:blur-[0.5px] after:content-[''] hover:bg-white/[0.2] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-1px_1px_rgba(255,255,255,0.12),0_10px_28px_rgba(0,0,0,0.25)] active:scale-[0.97] active:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          enter
        </Link>
      </div>

      {/* 手机端访问时给出提示. */}
      <div className="md:hidden block">
        <p>this portfolio is designed for desktop/tabled screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
