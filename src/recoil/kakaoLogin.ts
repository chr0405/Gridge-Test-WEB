import { atom, selector, useRecoilCallback } from "recoil";

const kakaoAuthorizationCodeState = atom({
  key: "kakaoAuthorizationCodeState",
  default: {
    authorizationCode: "",
    kakaoToken: "",
  },
});

export const authorizationCodeState = selector({
  key: "authorizationCodeState",
  get: ({ get }) => get(kakaoAuthorizationCodeState).authorizationCode,
  set: ({ get, set }, authorizationCode) => set(kakaoAuthorizationCodeState, { ...get(kakaoAuthorizationCodeState), authorizationCode }),
});

export const kakaoTokenState = selector({
  key: "kakaoTokenState",
  get: ({ get }) => get(kakaoAuthorizationCodeState).kakaoToken,
  set: ({ get, set }, kakaoToken) => set(kakaoAuthorizationCodeState, { ...get(kakaoAuthorizationCodeState), kakaoToken }),
});

export const resetKakaoAuthorizationCodeState = () => {
  const resetStateCallback = useRecoilCallback(({ reset }) => () => {
    reset(kakaoAuthorizationCodeState);
  });
  
  resetStateCallback();
};