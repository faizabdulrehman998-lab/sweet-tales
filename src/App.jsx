import React, { useState } from "react";
import Bakery from "./sprites/Bakery.jsx";
import Logo from "./sprites/Logo.jsx";
import Baker from "./components/Baker.jsx";
import SplashTable from "./components/SplashTable.jsx";
import DialogueBox from "./components/DialogueBox.jsx";
import CakeMenu from "./components/CakeMenu.jsx";
import HappyEnding from "./components/HappyEnding.jsx";
import Grid from "./sprites/Grid.jsx";
import { table } from "./sprites/table.js";

// phase: splash -> welcome -> menu -> thanks -> happy
export default function App() {
  const [phase, setPhase] = useState("splash");
  const [ordered, setOrdered] = useState(null);
  const [toppings, setToppings] = useState(false);

  return (
    <div className={`app phase-${phase}`}>
      <div className="stage">
        <Bakery />

        {/* small corner title on the main screen */}
        {phase !== "splash" && <Logo className="corner-logo" scale={2} />}

        {/* big splash logo drops from top */}
        {phase === "splash" && (
          <div className="splash-logo-wrap">
            <Logo className="splash-logo" scale={7} />
          </div>
        )}

        {/* baker behind the table on main screen*/}
        {phase !== "splash" && (
          <div className="baker-wrap">
            <Baker happy={phase === "happy"} px={7} />
          </div>
        )}

        {/* splash: full table with the 6-cake showcase */}
        {phase === "splash" && <SplashTable showCakes={toppings} />}

        {/* main screen: plain counter that the baker stands behind */}
        {phase !== "splash" && (
          <div className="main-counter">
            <Grid grid={table} px={9} />
          </div>
        )}

        {phase === "splash" && (
          <button className="start-btn" onClick={() => {
            setToppings(true);
            setTimeout(() => setPhase("welcome"), 1100);
          }}>
            PRESS START
          </button>
        )}

        {phase === "welcome" && (
          <div className="bottom-dialogue">
            <DialogueBox
              lines={["WELCOME TO SWEET TALES!", "WHAT WOULD YOU LIKE TO ORDER?"]}
              onFinish={() => setPhase("menu")}
            />
          </div>
        )}

        {phase === "menu" && (
          <div className="menu-layer">
            <CakeMenu
              onSelect={(cake) => {
                setOrdered(cake);
                setPhase("thanks");
              }}
            />
          </div>
        )}

        {phase === "thanks" && (
          <div className="overlay" onClick={() => setPhase("happy")}>
            <div className="thanks-box">
              <p className="thanks-title">THANKS FOR YOUR ORDER!</p>
              {ordered && (
                <div className="thanks-cake">
                  <Grid grid={ordered.sprite} px={6} />
                </div>
              )}
              <p className="thanks-hint">TAP TO CONTINUE</p>
            </div>
          </div>
        )}

        {phase === "happy" && <HappyEnding cake={ordered} />}

        <div className="scanlines" aria-hidden="true" />
      </div>
    </div>
  );
}
