"use client";

import { WindowType } from "@/constants/windows";
import useWindowStore from "@/store/window";

const WindowControls = ({ target }: { target: WindowType }) => {
  const { close } = useWindowStore();

  return (
    <>
      <div className="window-controls">
        <div className="close" onClick={() => close(target)}></div>
        <div className="minimize"></div>
        <div className="maximize"></div>
      </div>
    </>
  );
};

export default WindowControls;
