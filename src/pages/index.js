import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PortfolioListing from '../templates/portfolio-listing';

export default ({data, ...props}) => {
  return (
    <div>
      <PortfolioListing
        category="Projekt"
        data={data}
        {...props}
      />
    </div>
  )
}

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulPortfolioItem(sort: { fields: [fields___slug], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          category {
            title
          }
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
    }
  }
`;

