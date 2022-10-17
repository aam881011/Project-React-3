import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("open");
  };
  return (
    <section className="navbar">
      <section className="container">
        <div className="barentNav">
          <div className="logo">
            <a href="/">DORSIN</a>
          </div>
          <nav ref={navRef}>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Services</Link>
              </li>
              <li>
                <Link to="">Features</Link>
              </li>
              <li>
                <Link to="">Pricing</Link>
              </li>
              <li>
                <Link to="">Team</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </section>
    </section>
  );
};

export default Navigation;
