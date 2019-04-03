/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { slugify } = require("./src/utils/slugify")
const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    createNodeField({
      node,
      name: "slug",
      value: node.frontmatter.path,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve("src/templates/SinglePost.js")
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) return Promise.reject(result.errors)
      const posts = result.data.allMarkdownRemark.edges
      posts.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: pageTemplate,
          context: {
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
