import React, { useState } from 'react';
import { useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

import Header from './header';

const Layout = ({ children }) => {
  const [navIsOpen, setToggleNav] = useState(false);
  let mainNavClass = navIsOpen ? `site-head-open site-wrapper ` : ``;
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
    <div className={`site-wrapper ${mainNavClass}`} role="wrapper">
      <Header siteMetadata={site.siteMetadata} toggleNav={setToggleNav} navIsOpen={navIsOpen}/>
      <main id="site-main" className="site-main">
        <div id="swup">
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
