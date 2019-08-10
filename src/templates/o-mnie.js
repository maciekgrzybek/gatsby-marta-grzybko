import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;
  const pageData = data.allMarkdownRemark.edges[0].node;
  function createMarkup() {
    return {__html: pageData.html};
  }
  console.log(pageData)
  return (
    <Layout title={siteTitle}>
      <SEO
        title="O mnie"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            {pageData.frontmatter.intro}
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={pageData.frontmatter.thumbnail.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
query AboutMePageQuery {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(filter: {fields: {slug: {eq: "/o-mnie/"}}}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          intro
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  }
}
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
