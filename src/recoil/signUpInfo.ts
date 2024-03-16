import { atom, selector, useRecoilCallback } from "recoil";

const signUpInfoState = atom({
  key: "signUpInfoState",
  default: {
    loginIdInfo: "",
    passwordInfo: "",
    realNameInfo: "",
    phoneInfo: "",
    birthDateInfo: "",
  },
});

export const loginIdInfoState = selector({
  key: "loginIdInfoState",
  get: ({ get }) => get(signUpInfoState).loginIdInfo,
  set: ({ get, set }, loginIdInfo) => set(signUpInfoState, { ...get(signUpInfoState), loginIdInfo }),
});

export const passwordInfoState = selector({
    key: "passwordInfoState",
    get: ({ get }) => get(signUpInfoState).passwordInfo,
    set: ({ get, set }, passwordInfo) => set(signUpInfoState, { ...get(signUpInfoState), passwordInfo }),
  });

export const realNameInfoState = selector({
key: "realNameInfoState",
get: ({ get }) => get(signUpInfoState).realNameInfo,
set: ({ get, set }, realNameInfo) => set(signUpInfoState, { ...get(signUpInfoState), realNameInfo }),
});

export const phoneInfoState = selector({
key: "phoneInfoState",
get: ({ get }) => get(signUpInfoState).phoneInfo,
set: ({ get, set }, phoneInfo) => set(signUpInfoState, { ...get(signUpInfoState), phoneInfo }),
});

export const birthDateInfoState = selector({
key: "birthDateInfoState",
get: ({ get }) => get(signUpInfoState).birthDateInfo,
set: ({ get, set }, birthDateInfo) => set(signUpInfoState, { ...get(signUpInfoState), birthDateInfo }),
});

export const resetSignUpInfoState = () => {
  const resetStateCallback = useRecoilCallback(({ reset }) => () => {
    reset(signUpInfoState);
  });
  
  resetStateCallback();
};