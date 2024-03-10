import { atom, selector } from "recoil";

const kakaoAuthorizationCodeState = atom({
  key: "kakaoAuthorizationCodeState",
  default: {
    authorizationCode: "",
  },
});

export const authorizationCodeState = selector({
  key: "authorizationCodeState",
  get: ({ get }) => get(kakaoAuthorizationCodeState).authorizationCode,
  set: ({ get, set }, authorizationCode) => set(kakaoAuthorizationCodeState, { ...get(kakaoAuthorizationCodeState), authorizationCode }),
});