import { atom, selector, useRecoilCallback } from "recoil";

const signUpPageState = atom({
  key: "signUpPageState",
  default: {
    signUp1: true,
    signUp2: false,
    signUp3: false,
  },
});

export const signUp1State = selector({
  key: "signUp1State",
  get: ({ get }) => get(signUpPageState).signUp1,
  set: ({ get, set }, signUp1) => set(signUpPageState, { ...get(signUpPageState), signUp1 }),
});

export const signUp2State = selector({
  key: "signUp2State",
  get: ({ get }) => get(signUpPageState).signUp2,
  set: ({ get, set }, signUp2) => set(signUpPageState, { ...get(signUpPageState), signUp2 }),
});

export const signUp3State = selector({
    key: "signUp3State",
    get: ({ get }) => get(signUpPageState).signUp3,
    set: ({ get, set }, signUp3) => set(signUpPageState, { ...get(signUpPageState), signUp3 }),
  });

export const resetSignUpPageState = () => {
  const resetStateCallback = useRecoilCallback(({ reset }) => () => {
    reset(signUpPageState);
  });
  
  resetStateCallback();
};