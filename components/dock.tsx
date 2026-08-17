"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DOCKS } from "@/constants/dock";
import Image from "next/image";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import useWindowStore from "@/store/window";
import { WindowType } from "@/constants/windows";

type ToggleParams = {
  id: WindowType;
  canOpen: boolean;
};

const Dock = () => {
  const dockRef = useRef<HTMLDivElement>(null);
  const { open, close, focus, windows } = useWindowStore();

  const toggle = (app: ToggleParams) => {
    if (!app.canOpen) return;

    const window = windows[app.id];
    if (window.isOpen) {
      close(app.id);
    } else {
      open(app.id);
    }
    console.log(windows);
  };

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll<HTMLElement>(".dock-icon");

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2) / 2000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();
      const mouseX = e.clientX - left;
      animateIcons(mouseX);
    };

    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };
    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {DOCKS.map(({ id, name, icon, canOpen }) => (
          <div key={id} className=" relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggle({ id, canOpen })}
            >
              <Image
                className="w-12 h-12"
                src={`/images/${icon}`}
                alt={icon}
                width={48}
                height={48}
                loading="lazy"
              />
            </button>
            <Tooltip id="dock-tooltip" place="top" className="tooltip" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dock;
