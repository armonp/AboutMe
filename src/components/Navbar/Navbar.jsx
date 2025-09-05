import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav
        className={styles.navbar}
        role="navigation"
        aria-label="Main navigation"
      >
        <a className={styles.title} href="/" aria-label="Go to homepage">
          Portfolio
        </a>
        <div className={styles.menu}>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="navigation-menu"
            type="button"
          >
            <img
              src={
                menuOpen
                  ? getImageUrl("nav/closeIcon.png")
                  : getImageUrl("nav/menuIcon.png")
              }
              alt=""
              aria-hidden="true"
            />
          </button>
          <ul
            id="navigation-menu"
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
            role="menu"
            aria-hidden={!menuOpen}
          >
            <li role="menuitem">
              <a href="#about" aria-label="Go to About section">
                About
              </a>
            </li>
            <li role="menuitem">
              <a href="#experience" aria-label="Go to Experience section">
                Experience
              </a>
            </li>
            <li role="menuitem">
              <a href="#projects" aria-label="Go to Projects section">
                Projects
              </a>
            </li>
            <li role="menuitem">
              <a href="#contact" aria-label="Go to Contact section">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
