import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/seo';

const PortfolioItemTemplate = ({ data }) => {
  const portfolioItem = data.contentfulPortfolioItem;

  function renderImages(images) {
    return images.map((image) => {
      return (
        <Img
          key={image.id}
          className="kg-image"
          fluid={image.fluid}
          alt={data.contentfulPortfolioItem.title}
        />
      );
    });
  }

  return (
    <>
      <SEO
        title={portfolioItem.title}
        description={
          portfolioItem.description
            ? portfolioItem.description.description
            : portfolioItem.title
        }
      />
      <article
        className={`post-content ${portfolioItem.frontmatter || `no-image`}`}
      >
        <header className="post-content-header">
          <h1 className="post-content-title">{portfolioItem.title}</h1>
        </header>

        {portfolioItem.description && (
          <p className="post-content-excerpt">
            {portfolioItem.description.description}
          </p>
        )}
        {portfolioItem.images.length > 0 && renderImages(portfolioItem.images)}
        <footer className="post-content-footer"></footer>
      </article>
    </>
  );
};

export default PortfolioItemTemplate;

export const pageQuery = graphql`
  query PortfolioItemBySlug($slug: String!) {
    contentfulPortfolioItem(fields: { slug: { eq: $slug } }) {
      title
      description {
        description
      }
      images {
        id
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
