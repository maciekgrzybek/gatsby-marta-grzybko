import React, { useState } from 'react';
import {Link } from 'gatsby';

const Header = ({toggleNav, navIsOpen}) => {
  return (
    <header className="site-head">
      <div className="site-head-container">
        <button
          className="nav-burger"
          href={`#`}
          onClick={() => toggleNav(!navIsOpen)}
        >
          <div
            className="hamburger hamburger--collapse"
            aria-label="Menu"
            role="button"
            aria-controls="navigation"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </button>
        <nav id="swup" className="site-head-left">
          <ul className="nav" role="menu">
            <li role="menuitem" onClick={() => toggleNav(!navIsOpen)}>
              <Link to={`/`} activeClassName="nav-current">
                Projekty
              </Link>
            </li>
            <li role="menuitem" onClick={() => toggleNav(!navIsOpen)}>
              <Link to={`/realizacje`} activeClassName="nav-current">
                Realizacje
              </Link>
            </li>
            <li role="menuitem" onClick={() => toggleNav(!navIsOpen)}>
              <Link to={`/o-mnie`} activeClassName="nav-current">
                O mnie
              </Link>
            </li>
          </ul>
        </nav>
        <div className="site-head-center">
          <Link className="site-head-logo" to={`/`}>
            Marta Grzybko
            <br />
            <span className="site-head-logo__subtitle">
            Projektowanie wnętrz
            </span>
          </Link>
        </div>
        <div className="site-head-right">
          <div className="social-links">
            <a
              href="mailto:martagrzybko@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="tel:48793298366"
              title="Telefon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telefon
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;