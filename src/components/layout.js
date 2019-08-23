import React, { useState } from 'react';
import { useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

import Header from './header';

const Layout = ({ children }) => {
  const [navIsOpen, setToggleNav] = useState(false);
  let mainNavClass = navIsOpen ? `site-head-open site-wrapper ` : `site-wrapper`;
  return (
    <div className={`site-wrapper ${mainNavClass}`} role="wrapper">
      <Header toggleNav={setToggleNav} navIsOpen={navIsOpen}/>
      <main id="site-main" className="site-main">
        <div id="swup">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>Marta Grzybko - Projektowanie wnętrz</Link>
      </footer>
    </div>
  );
};

export default Layout;
