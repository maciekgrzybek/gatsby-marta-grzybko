import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import SEO from '../components/seo';

const AboutPage = ({ data }) => {
  const pageData = data.contentfulPages;
  return (
    <>
      <SEO
        title="O mnie"
        keywords={[`blog`, `marta`, `grzybko`, `projektowanie`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            {pageData.intro.intro}
          </h2>
          <figure className="kg-card kg-image-card">
            <Img fluid={pageData.images[0].fluid} className="kg-image" />
          </figure>
          <div
            dangerouslySetInnerHTML={{
              __html: pageData.description.description,
            }}
          />
          
          <br />
          <b>Kontakt:</b>
          <div id="kontakt">
            <ul className="contact-list">
              <li><FontAwesomeIcon icon={faEnvelope} />martagrzybko@gmail.com</li>
              <li><FontAwesomeIcon icon={faPhone} />+48 793 298 366</li>
            </ul>
          </div>

        </div>
      </article>
    </>
  );
};

export const query = graphql`
  query AboutMePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPages(title: { eq: "About me" }) {
      title
      intro {
        intro
      }
      description {
        description
      }
      images {
        fluid(maxWidth: 1360) {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
  }
`;

export default AboutPage;
