"use client";

import { techStack } from "@/constants/terminal";
import WindowWrapper from "./window-wrapper";
import { Check, Flag } from "lucide-react";
import WindowControls from "./window-controls";

const Terminal = () => {
  return (
    <>
      <div className="window-header">
        <WindowControls target="terminal" />
        <h2>skills</h2>
      </div>

      <div className="techstack">
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category}>
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={item}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check className="check" size={20} />5 of 5 stacks loaded
            successfully(100%)!
          </p>

          <p className="text-black">
            <Flag size={15} fill="black" />
            render time: 2ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper({
  Component: Terminal,
  windowKey: "terminal",
});

export default TerminalWindow;
