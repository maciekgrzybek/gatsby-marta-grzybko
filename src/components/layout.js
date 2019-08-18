import React, { useState } from 'react';
import { useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const Layout = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);

  const {site} = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `);
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <button
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
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
              <li role="menuitem" onClick={() => setToggleNav(!toggleNav)}>
                <Link to={`/`} activeClassName="nav-current">
                  Projekty
                </Link>
              </li>
              <li role="menuitem" onClick={() => setToggleNav(!toggleNav)}>
                <Link to={`/realizacje`} activeClassName="nav-current">
                  Realizacje
                </Link>
              </li>
              <li role="menuitem" onClick={() => setToggleNav(!toggleNav)}>
                <Link to={`/o-mnie`} activeClassName="nav-current">
                  O mnie
                </Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {site.siteMetadata.title}
              <br />
              <span className="site-head-logo__subtitle">{site.siteMetadata.subtitle}</span>
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
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{site.siteMetadata.title} - {site.siteMetadata.subtitle}</Link>
      </footer>
    </div>
  );
};

export default Layout;
