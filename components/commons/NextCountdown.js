import React, { useState, useEffect } from "react";

import {
  daysR,
  secondsR,
  diff,
  getDays,
  getSeconds,
  getDiff,
} from "../../state";
import { useRecoilState, useRecoilValue } from "recoil";

const NextCountdown = () => {
  const [partyTime, setPartyTime] = useState(false);

  const getDaysRecoil = useRecoilValue(getDays);
  const getSecondsRecoil = useRecoilValue(getSeconds);
  const getDiffRecoil = useRecoilValue(getDiff);

  const [daysRecoil, setDaysRecoil] = useRecoilState(daysR);
  const [secondsRecoil, setSecondsRecoil] = useRecoilState(secondsR);
  const [diffRecoil, setDiffRecoil] = useRecoilState(diff);

  useEffect(() => {
    const target = new Date("2/11/2022 23:59:59");

    console.log(getDiffRecoil);
    console.log(getSecondsRecoil);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      setDiffRecoil(difference);

      const dR = Math.floor(getDiffRecoil / (1000 * 60 * 60 * 24));
      setDaysRecoil(dR);

      const dS = Math.floor((difference % (1000 * 60)) / 1000);
      setSecondsRecoil(dS);

      if (dR <= 0 && dS <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">
      {partyTime ? (
        <>
          <h1>Happy new year!</h1>
        </>
      ) : (
        <>
          <p className="text-6xl bg-gradient-to-r text-gradient from-first via-middle to-last">
            {getDaysRecoil}
          </p>
          {/* <p className="text-6xl bg-gradient-to-r text-gradient from-first via-middle to-last">
            {getSecondsRecoil}
          </p> */}
        </>
      )}
    </div>
  );
};

export default NextCountdown;
