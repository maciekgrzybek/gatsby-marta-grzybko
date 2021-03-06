import React, { useState } from 'react';
import {Link } from 'gatsby';

const Header = ({siteMetadata, toggleNav, navIsOpen}) => {
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
            {siteMetadata.title}
            <br />
            <span className="site-head-logo__subtitle">
              {siteMetadata.subtitle}
            </span>
          </Link>
        </div>
        <div className="site-head-right">
          <div className="social-links">
            <Link
              to={`/o-mnie/#kontakt`}
            >
              Email
            </Link>
            <Link
              to={`/o-mnie/#kontakt`}
            >
              Telefon
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;