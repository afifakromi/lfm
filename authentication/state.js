import { atom, selector } from "recoil";

export const userState = atom({
  key: "userDataState",
  default: [],
});

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

export const formOneState = atom({
  key: "formOne",
  default: [],
});

export const getFormOneState = selector({
  key: "getFormOne",
  get: ({ get }) => {
    const values = get(formOneState);

    return values;
  },
});

export const formTwoState = atom({
  key: "formTwo",
  default: [],
});

export const getFormTwoState = selector({
  key: "getFormTwo",
  get: ({ get }) => {
    const values = get(formTwoState);

    return values;
  },
});

export const formThreeState = atom({
  key: "formThree",
  default: [],
});

export const getFormThreeState = selector({
  key: "getFormThree",
  get: ({ get }) => {
    const values = get(formThreeState);

    return values;
  },
});

export const toggleLoginState = atom({
  key: "toggleLoginState",
  default: false,
});

export const getToggleLoginState = selector({
  key: "getToggleLoginState",
  get: ({ get }) => {
    const values = get(toggleLoginState);

    return values;
  },
});

export const toggleRegisterState = atom({
  key: "toggleRegisterState",
  default: false,
});

export const getToggleRegisterState = selector({
  key: "getToggleRegisterState",
  get: ({ get }) => {
    const values = get(toggleRegisterState);

    return values;
  },
});
