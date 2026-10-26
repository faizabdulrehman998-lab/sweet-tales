import { useEffect, useState } from "react";
import { img } from "../data/menu";

export default function Splash({ onDone }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduce ? 500 : 2300;
    const fade = reduce ? 100 : 700;

    const t1 = setTimeout(() => setLeaving(true), hold);
    const t2 = setTimeout(onDone, hold + fade);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  const skip = () => {
    setLeaving(true);
    setTimeout(onDone, 80);
  };

  return (
    <div
      className={`splash ${leaving ? "leaving" : ""}`}
      role="button"
      tabIndex={0}
      aria-label="Skip intro"
      onClick={skip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") skip();
      }}
    >
      <img
        className="splash-logo"
        src={img("logo-thg.png")}
        alt=""
        width={160}
        height={160}
      />
      <p className="splash-tag">Authentic American Halal · Since 1990</p>
      <button type="button" className="splash-skip" onClick={skip}>
        Skip
      </button>
      <div className="splash-bar" aria-hidden="true" />
    </div>
  );
}
