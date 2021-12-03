import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const daysR = atom({
  key: "daysR",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const getDays = selector({
  key: "getDays",
  get: ({ get }) => {
    const values = get(daysR);

    return values;
  },
});

export const secondsR = atom({
  key: "secondsR",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const getSeconds = selector({
  key: "getSeconds",
  get: ({ get }) => {
    const values = get(secondsR);

    return values;
  },
});

export const diff = atom({
  key: "diff",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const getDiff = selector({
  key: "getDiff",
  get: ({ get }) => {
    const values = get(diff);

    return values;
  },
});
