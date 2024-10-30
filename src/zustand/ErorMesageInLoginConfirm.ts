import { create } from "zustand";

interface Type {
  eror: boolean;
  setTrue: () => void;
}

const useErorState = create<Type>((set) => ({
  eror: false,
  setTrue: () => set({ eror: true }),
}));
//   const useBurgerShow = create<type>((set) => ({
//     burgerShow: false,
//     setTrue: () =>
//       set((state) => ({
//         burgerShow: !state.burgerShow,
//       })),
//   }));

export default useErorState;
