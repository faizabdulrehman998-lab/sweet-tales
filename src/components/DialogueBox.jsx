import React, { useEffect, useRef, useState } from "react";
import { Diamond } from "../sprites/ui.jsx";

export default function DialogueBox({ lines, onFinish }) {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);
  const timer = useRef(null);

  const text = lines[index];

  useEffect(() => {
    setShown("");
    setDone(false);
    let i = 0;
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer.current);
        setDone(true);
      }
    }, 45);
    return () => clearInterval(timer.current);
  }, [index, text]);

  function advance() {
    if (!done) {
      clearInterval(timer.current);
      setShown(text);
      setDone(true);
      return;
    }
    if (index < lines.length - 1) {
      setIndex(index + 1);
    } else {
      onFinish?.();
    }
  }

  return (
    <div className="dialogue" onClick={advance} role="button" tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && advance()}>
      <div className="dialogue-inner">
        <p className="dialogue-text">{shown}</p>
        {done && <Diamond className="dialogue-advance" />}
      </div>
    </div>
  );
}
