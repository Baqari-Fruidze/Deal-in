import { create } from "zustand";

interface Type {
  eror: boolean;
  setTrue: () => void;
}

const useErorState = create<Type>((set) => ({
  eror: false,
  setTrue: () => set({ eror: true }),
}));

export default useErorState;
