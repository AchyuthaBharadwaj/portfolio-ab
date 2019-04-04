/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { maxProblemsPerPage } = require("./src/utils/config")
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
  const templates = {
    pageTemplate: path.resolve("src/templates/SinglePost.js"),
    problemListTemplate: path.resolve("src/templates/ProblemListTemplate.js"),
  }

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/leetcode/" } }
        ) {
          totalCount
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
          component: templates.pageTemplate,
          context: {
            slug: node.fields.slug,
          },
        })
      })
      console.log(result.data.allMarkdownRemark.totalCount)
      const numOfPages = Math.ceil(
        result.data.allMarkdownRemark.totalCount / maxProblemsPerPage
      )

      let i
      for (i = 1; i < numOfPages; i++) {
        createPage({
          path: `/leetcode/page/${i + 1}`,
          component: templates.problemListTemplate,
          context: {
            currentPage: i + 1,
            skip: i * maxProblemsPerPage,
            limit: maxProblemsPerPage,
            numOfPages: numOfPages,
          },
        })
      }
      resolve()
    })
  })
}
