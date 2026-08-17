import {
  INITIAL_Z_INDEX,
  WINDOW_CONFIG,
  WindowConfig,
  WindowType,
} from "@/constants/windows";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type WindowStore = {
  windows: WindowConfig;
  nextZIndex: number;
  open: (key: WindowType, data?: unknown) => void;
  close: (key: WindowType) => void;
  focus: (key: WindowType) => void;
};

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    open: (key: WindowType, data: unknown) => {
      set((state) => {
        const window = state.windows[key];
        window.isOpen = true;
        window.zIndex = state.nextZIndex;
        window.data = data ?? window.data;
        state.nextZIndex++;
      });
    },
    close: (key: WindowType) => {
      set((state) => {
        const window = state.windows[key];
        window.isOpen = false;
        window.zIndex = INITIAL_Z_INDEX;
        window.data = null;
      });
    },
    focus: (key: WindowType) => {
      set((state) => {
        const window = state.windows[key];
        window.zIndex = state.nextZIndex++;
      });
    },
  })),
);

export default useWindowStore;
