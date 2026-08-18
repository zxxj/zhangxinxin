export type WindowType =
  | "finder"
  | "contact"
  | "resume"
  | "safari"
  | "photos"
  | "terminal"
  | "txtfile"
  | "imgfile"
  | "trash"
  | "project"
  | "contact"
  | "resume";

type WindowConfigItem = {
  isOpen: boolean;
  zIndex: number;
  data: unknown | null;
};

export type WindowConfig = Record<WindowType, WindowConfigItem>;

export const INITIAL_Z_INDEX: number = 1000;

export const WINDOW_CONFIG: WindowConfig = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  project: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};
