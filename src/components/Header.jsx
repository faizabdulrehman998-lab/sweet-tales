import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { img } from "../data/menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand" aria-label="The Halal Guys — home">
          <img src={img("logo-thg.png")} alt="" width={42} height={42} />
          <span className="brand-name">The Halal Guys</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/#story">Story</NavLink>
          <Link to="/menu" className="btn btn-primary btn-sm">
            Order Now
          </Link>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`nav-mobile ${open ? "open" : ""}`}
        aria-label="Mobile"
      >
        <NavLink to="/" onClick={close}>
          Home
        </NavLink>
        <NavLink to="/menu" onClick={close}>
          Menu
        </NavLink>
        <NavLink to="/#story" onClick={close}>
          Story
        </NavLink>
        <Link to="/menu" className="btn btn-primary" onClick={close}>
          Order Now
        </Link>
      </nav>
    </header>
  );
}
