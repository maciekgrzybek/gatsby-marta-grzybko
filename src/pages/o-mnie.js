import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const pageData = data.contentfulPages;
  return (
    <Layout title={siteTitle}>
      <SEO
        title="O mnie"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            {pageData.intro.intro}
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={pageData.images[0].fluid}
              className="kg-image"
            />
          </figure>
          <div dangerouslySetInnerHTML={{__html: pageData.description.description}} />
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query AboutMePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPages(title: {eq: "About me"}) {
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