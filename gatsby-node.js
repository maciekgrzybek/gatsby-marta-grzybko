const path = require(`path`)
const slugify = require('slugify');


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `ContentfulPortfolioItem`) {
    const slug = slugify(node.title).toLowerCase();
    createNodeField({
      name: `slug`,
      node,
      value: `portfolio/${slug}`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const portfolioItem = path.resolve(`./src/templates/portfolio-item.js`)

  return graphql(
    `
      {
        allContentfulPortfolioItem {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create portfolio items pages.
    const portfolioItems = result.data.allContentfulPortfolioItem.edges;

    portfolioItems.forEach((item, index) => {
      const previous = index === portfolioItems.length - 1 ? null : portfolioItems[index + 1].node
      const next = index === 0 ? null : portfolioItems[index - 1].node
      createPage({
        path: `/${item.node.fields.slug}`,
        component: portfolioItem,
        context: {
          slug: item.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}
