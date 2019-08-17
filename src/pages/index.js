import React from "react"
import {graphql, StaticQuery} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

import "../utils/css/components/global.css"
import "../utils/normalize.css"
import "../utils/css/screen.css"

const PortfolioIndex = ({data}) => {
  const siteTitle = data.site.siteMetadata.title
  const portfolioItems = data.allContentfulPortfolioItem.edges
  let portfolioCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Projekty"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )}
      <div className="post-feed">
        {portfolioItems.map(({node}) => {
          portfolioCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={portfolioCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
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
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <PortfolioIndex location={props.location} props data={data} {...props} />
    )}
  />
)

