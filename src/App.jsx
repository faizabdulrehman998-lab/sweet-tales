import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Splash from "./components/Splash";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import "./App.css";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <div className="app">
      {!splashDone && <Splash onDone={() => setSplashDone(true)} />}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
