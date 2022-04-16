export type ISwearLogger = {
  log: (message?: any, ...optionalMessages: any[]) => void;
  groupCollapsed: (...optionalMessage: any[]) => void;
  group: (...optionalMessage: any[]) => void;
  groupEnd: () => void;
};
