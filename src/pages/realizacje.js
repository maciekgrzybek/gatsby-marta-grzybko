import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PortfolioListing from '../templates/portfolio-listing';

export default ({data, ...props}) => {
  return (
    <PortfolioListing
      category="Realizacja"
      data={data}
      {...props}
    />
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

// export default (props) => {
//   return (
//     <StaticQuery
//       query={indexQuery}
//       render={(data) => (
//         <PortfolioListing
//           props
//           category="Realizacja"
//           data={data}
//           {...props}
//         />
//       )}
//     />
//   );
// };
