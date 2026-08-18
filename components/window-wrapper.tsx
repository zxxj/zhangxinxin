"use client";

import { WindowType } from "@/constants/windows";
import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import { useRef, ComponentType, useLayoutEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

type WindowWrapperProps = {
  Component: ComponentType;
  windowKey: WindowType;
};

const WindowWrapper = ({ Component, windowKey }: WindowWrapperProps) => {
  const Wrapped = (props: object) => {
    const ref = useRef<HTMLElement>(null);
    const { windows, focus } = useWindowStore();

    const { isOpen, zIndex } = windows[windowKey];

    useGSAP(() => {
      const element = ref.current;
      if (!element || !isOpen) return;

      element.style.display = "block";

      gsap.fromTo(
        element,
        {
          scale: 0.8,
          opacity: 0,
          y: 40,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
      );
    }, [isOpen]);

    useGSAP(() => {
      const element = ref.current;
      if (!element) return;

      const [instance] = Draggable.create(element, {
        onPress: () => focus(windowKey),
      });
      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const element = ref.current;
      if (!element) return;
      element.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        ref={ref}
        id={windowKey}
        style={{ zIndex: zIndex }}
        className={`${windowKey} absolute`}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
