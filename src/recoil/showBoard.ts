import { atom, selector, useRecoilCallback } from "recoil";

const scrollState = atom({
    key: "scrollState",
    default: {
      scrollControl: true,
    },
});

export const scrollControlState = selector({
    key: "scrollControlState",
    get: ({ get }) => get(scrollState).scrollControl,
    set: ({ get, set }, scrollControl) => set(scrollState, { ...get(scrollState), scrollControl }),
  });
  
  export const resetBoardState = () => {
    const resetStateCallback = useRecoilCallback(({ reset }) => () => {
      reset(scrollState);
    });
    
    resetStateCallback();
  };