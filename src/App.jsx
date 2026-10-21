import React, { useState, useEffect, useRef } from "react";
import "./theme.css";

const menuCategories = [
  {
    id: "starters",
    name: "Starters",
    items: [
      { name: "Tuna Crudo", desc: "Yuzu kosho, cucumber, shiso, sesame", price: 18 },
      { name: "Burrata", desc: "Heirloom tomatoes, basil oil, grilled sourdough", price: 16 },
      { name: "Hamachi Tartare", desc: "Avocado, ponzu, tobiko, crispy nori", price: 20 },
      { name: "Foie Gras Torchon", desc: "Fig jam, brioche, pickled cherries", price: 24 },
    ],
  },
  {
    id: "mains",
    name: "Mains",
    items: [
      { name: "Dry-Aged Ribeye", desc: "Bone marrow butter, roasted shallots, watercress", price: 58 },
      { name: "Branzino", desc: "Fennel, orange, olives, herb salad", price: 42 },
      { name: "Lobster Risotto", desc: "Saffron, mascarpone, chives, caviar", price: 48 },
      { name: "Wagyu Burger", desc: "Aged cheddar, truffle aioli, hand-cut fries", price: 32 },
      { name: "Rack of Lamb", desc: "Mint chimichurri, roasted garlic jus", price: 52 },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Chocolate Soufflé", desc: "Grand Marnier crème anglaise", price: 14 },
      { name: "Lemon Tart", desc: "Meringue, blueberry compote, vanilla bean", price: 12 },
      { name: "Tiramisu", desc: "Espresso, mascarpone, cocoa nibs", price: 13 },
    ],
  },
];

const wineList = [
  { name: "Chablis Premier Cru", region: "Burgundy, France", glass: 18, bottle: 85 },
  { name: "Pinot Noir", region: "Willamette Valley, OR", glass: 16, bottle: 72 },
  { name: "Cabernet Sauvignon", region: "Napa Valley, CA", glass: 22, bottle: 105 },
  { name: "Champagne Brut", region: "Reims, France", glass: 24, bottle: 120 },
];

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-content">
        <div className={`hero-text ${visible ? "visible" : ""}`}>
          <p className="hero-tagline">EST. 2024</p>
          <h1 className="hero-title">AURELIA</h1>
          <p className="hero-subtitle">Contemporary European Cuisine</p>
          <p className="hero-location">128 West 23rd Street • New York, NY 10011</p>
          <div className="hero-actions">
            <a href="#reservations" className="btn btn-primary">Reserve a Table</a>
            <a href="#menu" className="btn btn-ghost">View Menu</a>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={ref} aria-labelledby="about-title">
      <div className="container">
        <div className={`about-grid ${visible ? "visible" : ""}`}>
          <div className="about-image" aria-hidden="true">
            <div className="image-frame">
              <div className="image-placeholder" />
            </div>
            <div className="image-accent" aria-hidden="true" />
          </div>
          <div className="about-content">
            <span className="section-label">Our Philosophy</span>
            <h2 id="about-title" className="section-title">Where Seasonality Meets Craft</h2>
            <div className="about-text">
              <p>
                Aurelia was born from a simple belief: exceptional dining begins with exceptional ingredients.
                We work directly with local farmers, foragers, and artisans to bring the finest seasonal
                produce to your plate.
              </p>
              <p>
                Our menu evolves with the seasons, celebrating the rhythm of nature through contemporary
                European techniques. Each dish is composed with intention—balancing texture, temperature,
                and flavor to create moments of genuine delight.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">01</span>
                <span className="highlight-text">Sourced Daily</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">02</span>
                <span className="highlight-text">Zero Waste</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">03</span>
                <span className="highlight-text">Artisan Partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState("starters");
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const category = menuCategories.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="menu" ref={ref} aria-labelledby="menu-title">
      <div className="container">
        <div className={`menu-header ${visible ? "visible" : ""}`}>
          <span className="section-label">Our Offerings</span>
          <h2 id="menu-title" className="section-title">Seasonal Menu</h2>
        </div>

        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`${cat.id}-panel`}
              id={`${cat.id}-tab`}
              className={`menu-tab ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className={`menu-content ${visible ? "visible" : ""}`}>
          <div
            role="tabpanel"
            id={`${activeCategory}-panel`}
            aria-labelledby={`${activeCategory}-tab`}
            className="menu-panel"
          >
            {category.items.map((item, i) => (
              <article key={item.name} className="menu-item" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-desc">{item.desc}</p>
                </div>
                <span className="item-price">${item.price}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="wine-section" aria-labelledby="wine-title">
          <h3 id="wine-title" className="wine-title">Wine by the Glass</h3>
          <div className="wine-grid">
            {wineList.map((wine) => (
              <div key={wine.name} className="wine-card">
                <div className="wine-info">
                  <h4 className="wine-name">{wine.name}</h4>
                  <p className="wine-region">{wine.region}</p>
                </div>
                <div className="wine-prices">
                  <span className="wine-glass">Glass ${wine.glass}</span>
                  <span className="wine-bottle">Bottle ${wine.bottle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reservations() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="reservations" className="reservations" ref={ref} aria-labelledby="reservations-title">
        <div className="container">
          <div className={`reservations-card success ${visible ? "visible" : ""}`}>
            <div className="success-icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="section-title">Request Sent</h2>
            <p className="success-text">We&apos;ll confirm your reservation at <strong>{formData.email}</strong> within the hour.</p>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Book Another</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservations" className="reservations" ref={ref} aria-labelledby="reservations-title">
      <div className="container">
        <div className={`reservations-grid ${visible ? "visible" : ""}`}>
          <div className="reservations-info">
            <span className="section-label">Join Us</span>
            <h2 id="reservations-title" className="section-title">Reserve a Table</h2>
            <div className="info-text">
              <p>We accept reservations up to 60 days in advance. For parties larger than 8, please contact our private dining team directly.</p>
              <div className="details">
                <div className="detail">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Tue–Sat: 5:30 PM – 10:00 PM</span>
                </div>
                <div className="detail">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Sun–Mon: Closed</span>
                </div>
                <div className="detail">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4" />
                    <path d="M3 10h18M15 21v-6M22 21H2" />
                  </svg>
                  <span>Private Dining Available</span>
                </div>
              </div>
            </div>
          </div>

          <form className="reservations-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@email.com"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 000-0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Guests *</label>
                <select id="guests" name="guests" value={formData.guests} onChange={handleChange} required>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time *</label>
                <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                  <option value="">Select time</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="occasion">Special Occasion (Optional)</label>
              <input
                type="text"
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                placeholder="Anniversary, birthday, etc."
              />
            </div>
            <button type="submit" className="btn btn-primary btn-full">Request Reservation</button>
            <p className="form-note">* Required fields. This is a request—we&apos;ll confirm via email within one hour.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">AURELIA</h3>
            <p className="footer-tagline">Contemporary European Cuisine</p>
            <div className="footer-social" aria-label="Social links">
              <a href="#" aria-label="Instagram" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" aria-label="OpenTable" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <path d="M8 14h8M8 18h5" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <h4 className="footer-heading">Experience</h4>
            <ul>
              <li><a href="#menu">Seasonal Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#">Private Dining</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Wine List</a></li>
            </ul>
          </nav>

          <nav className="footer-nav" aria-label="Contact information">
            <h4 className="footer-heading">Contact</h4>
            <ul>
              <li>128 West 23rd Street</li>
              <li>New York, NY 10011</li>
              <li><a href="tel:+12125550199">(212) 555-0199</a></li>
              <li><a href="mailto:hello@aurelia.nyc">hello@aurelia.nyc</a></li>
            </ul>
          </nav>

          <div className="footer-hours">
            <h4 className="footer-heading">Hours</h4>
            <ul>
              <li><span>Tuesday – Thursday</span> <span>5:30 PM – 10:00 PM</span></li>
              <li><span>Friday – Saturday</span> <span>5:30 PM – 11:00 PM</span></li>
              <li><span>Sunday – Monday</span> <span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2024 Aurelia. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#reservations", label: "Reservations" },
  ];

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="Aurelia Home">
          <span className="logo-mark" aria-hidden="true">A</span>
          <span className="logo-text">AURELIA</span>
        </a>

        <ul className={`nav-links ${mobileOpen ? "open" : ""}`} role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a href={link.href} role="menuitem" className="nav-link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li role="none">
            <a href="#reservations" className="btn btn-primary nav-cta" onClick={() => setMobileOpen(false)}>
              Reserve
            </a>
          </li>
        </ul>

        <button
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-controls="nav-links"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`hamburger ${mobileOpen ? "open" : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="app">
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main" role="main">
        <Hero />
        <About />
        <Menu />
        <Reservations />
      </main>
      <Footer />
    </div>
  );
}