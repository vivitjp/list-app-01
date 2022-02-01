import React, { useState, useEffect, useRef } from "react";

export default function Timer(): JSX.Element {
  console.log("render App");

  const [timeLeft, setTimeLeft] = useState<number>(100);
  const timerRef = useRef<number | undefined>(undefined);
  const LeftCountRef = useRef<number | undefined>(timeLeft);

  useEffect(() => {
    LeftCountRef.current = timeLeft;
  }, [timeLeft]);

  const tickCallBack = () => {
    if (LeftCountRef.current === 0) {
      clearInterval(timerRef.current);
      return;
    }
    setTimeLeft(prevTime => prevTime - 1);
  };

  const handlerStart = () => {
    timerRef.current = window.setInterval(tickCallBack, 100);
    //timerRef.current = setInterval(tick, 10); //NG
  };

  const handlerReset = () => {
    clearInterval(timerRef.current);
    setTimeLeft(100);
  };

  return (
    <>
      <button onClick={handlerStart}>start</button>
      <button onClick={handlerReset}>reset</button>
      <p>App: {timeLeft}</p>
    </>
  );
}