import { create } from "zustand";
interface type {
  burgerShow: boolean;
  setTrue: () => void;
}

//   const useBurgerShow = create<type>((set) => ({
//     burgerShow: false,
//     setTrue: () =>
//       set((state) => ({
//         burgerShow: !state.burgerShow,
//       })),
//   }));

//   export default useBurgerShow;
