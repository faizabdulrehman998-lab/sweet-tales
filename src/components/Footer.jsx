import { Link } from "react-router-dom";
import { img } from "../data/menu";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={img("logo-thg.png")} alt="The Halal Guys" width={56} height={56} />
            <p>
              Chicken, gyros and falafel platters. The authentic American halal
              food — from a New York street cart to the world since 1990.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <a href="/#story">Our Story</a>
              </li>
              <li>
                <a
                  href="https://thehalalguys.com/catering/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Catering
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Flagship</h4>
            <ul>
              <li>W 53rd St &amp; 6th Ave</li>
              <li>New York, NY 10019</li>
              <li>(347) 527-1505</li>
              <li>Open late, every day</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow</h4>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/thehalalguys/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/TheHalalGuys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@thehalalguysofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 The Halal Guys. All rights reserved.</span>
          <span>
            Unofficial fan tribute · design prototype, not a real ordering site
          </span>
        </div>
      </div>
    </footer>
  );
}
