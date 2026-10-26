import { useEffect } from "react";
import { Link } from "react-router-dom";
import { img, SIGNATURE } from "../data/menu";

const MARQUEE_WORDS =
  "White Sauce · Hot Sauce · Yellow Rice · Grilled Chicken · Beef Gyro · Falafel · Warm Pita · Fresh Salad · ";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Landing() {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">53rd &amp; 6th · NYC Original</span>
            <h1 id="hero-title">
              The halal plate<br />
              <em>NYC lines up for</em>
            </h1>
            <p className="hero-sub">
              Grilled chicken, beef gyro and falafel over golden rice — finished
              with the white sauce and hot sauce that started a worldwide
              following.
            </p>
            <div className="hero-ctas">
              <Link to="/menu" className="btn btn-primary btn-lg">
                Order Now
              </Link>
              <a href="#story" className="btn btn-outline btn-lg">
                Our Story
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>1990</strong>
                <span>Started on a NYC cart</span>
              </div>
              <div className="hero-stat">
                <strong>100+</strong>
                <span>Locations worldwide</span>
              </div>
              <div className="hero-stat">
                <strong>2</strong>
                <span>Legendary sauces</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src={img("hero-platter.jpg")}
              alt="Halal Guys platter and sandwich with white and hot sauce"
              width={520}
              height={390}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>{MARQUEE_WORDS.repeat(2)}</span>
          <span>{MARQUEE_WORDS.repeat(2)}</span>
        </div>
      </div>

      {/* Story */}
      <section id="story" className="story" aria-labelledby="story-title">
        <div className="container story-grid">
          <div className="story-img reveal">
            <img
              src={img("about-cart.jpg")}
              alt="The Halal Guys cart and team in New York City"
              width={560}
              height={420}
              loading="lazy"
            />
          </div>
          <div className="story-copy reveal" style={{ "--d": "120ms" }}>
            <h2 id="story-title">From one cart to a global line</h2>
            <p>
              In 1990, three Egyptian immigrants started a hot dog cart on the
              corner of 53rd &amp; 6th Avenue. Muslim cab drivers asked for real
              halal food, so the cart pivoted — and the platter was born.
            </p>
            <p>
              Word spread fast. The line got long. Today The Halal Guys serves
              the same recipes in over 100 locations around the world.
            </p>
            <ul className="timeline">
              <li>
                <strong>1990</strong>
                <span>A hot dog cart opens on 53rd &amp; 6th</span>
              </li>
              <li>
                <strong>1990s</strong>
                <span>Pivots to American halal food for night-shift cabbies</span>
              </li>
              <li>
                <strong>2014</strong>
                <span>First restaurant opens — the line wraps the block</span>
              </li>
              <li>
                <strong>Today</strong>
                <span>100+ locations across the US, UK, Asia and beyond</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Signature platters */}
      <section
        className="signature"
        aria-labelledby="signature-title"
      >
        <div className="container">
          <header className="section-head reveal">
            <h2 id="signature-title">The platters people line up for</h2>
            <p className="section-sub">
              Everything comes over yellow rice with salad, pita and both
              sauces. Extra white sauce encouraged.
            </p>
          </header>
          <ul className="signature-grid">
            {SIGNATURE.map((item, i) => (
              <li
                key={item.id}
                className="sig-card reveal"
                style={{ "--d": `${i * 90}ms` }}
              >
                <div className="sig-photo">
                  <img
                    src={img(item.image)}
                    alt={item.name}
                    width={280}
                    height={280}
                    loading="lazy"
                  />
                </div>
                <div className="sig-body">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <div className="sig-row">
                    <span className="sig-price">${item.price.toFixed(2)}</span>
                    <Link to="/menu" className="btn btn-dark btn-sm">
                      Add to Order
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="section-cta reveal">
            <Link to="/menu" className="btn btn-outline btn-lg">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Sauces */}
      <section className="sauces" aria-labelledby="sauces-title">
        <div className="container sauces-grid">
          <div className="sauces-copy reveal">
            <h2 id="sauces-title">It&rsquo;s all about the sauces</h2>
            <p>
              Creamy white sauce. Fiery red hot sauce. They ride on every platter
              and sandwich we make — and regulars order them by the cup.
            </p>
            <p>Like it mild? White sauce only. Brave? Double hot.</p>
            <div className="sauce-pills">
              <span className="sauce-pill white">White Sauce</span>
              <span className="sauce-pill hot">Hot Sauce</span>
            </div>
          </div>
          <div className="sauces-img reveal" style={{ "--d": "120ms" }}>
            <img
              src={img("sandwiches.jpg")}
              alt="Halal Guys sandwiches topped with white and hot sauce"
              width={640}
              height={460}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="locations" aria-labelledby="locations-title">
        <div className="container">
          <div className="reveal">
            <h2 id="locations-title">Find us near you</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              From the original NYC cart to 100+ restaurants worldwide — the
              platter travels well.
            </p>
          </div>
          <div className="city-row reveal" style={{ "--d": "100ms" }}>
            {[
              "New York",
              "Los Angeles",
              "Chicago",
              "Houston",
              "Toronto",
              "London",
              "Jakarta",
              "Manila",
              "Seoul",
            ].map((city) => (
              <span key={city} className="city-chip">
                {city}
              </span>
            ))}
          </div>
          <div className="reveal" style={{ "--d": "160ms" }}>
            <Link to="/menu" className="btn btn-primary btn-lg">
              Order for Pickup
            </Link>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="catering-cta" aria-labelledby="catering-title">
        <img
          src={img("catering.jpg")}
          alt=""
          aria-hidden="true"
          width={1400}
          height={380}
          loading="lazy"
        />
        <div className="catering-inner reveal">
          <h2 id="catering-title">Feeding a crowd?</h2>
          <p>
            Full-service catering for offices, parties and events — platters by
            the tray, sauces by the tub.
          </p>
          <a
            href="https://thehalalguys.com/catering/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Cater Now
          </a>
        </div>
      </section>
    </>
  );
}
