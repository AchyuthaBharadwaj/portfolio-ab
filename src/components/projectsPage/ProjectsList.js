import React, { Component } from "react"
import ProjectsSection from "./ProjectsSection"
import { graphql, StaticQuery } from "gatsby"

const PROJECT_LIST = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            shortdesc
            includeOnPortfolio
            date(formatString: "MMM Do YYYY")
            path
            type
            language
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default class ProjectsList extends Component {
  render() {
    return (
      <StaticQuery
        query={PROJECT_LIST}
        render={data => {
          const projects = data.allMarkdownRemark.edges
          let projectGroups = { frontEnd: [], machineLearning: [], other: [] }
          projects.map(({ node }) => {
            if (node.frontmatter.type === "front-end") {
              projectGroups.frontEnd.push(node)
            } else if (node.frontmatter.type === "machine-learning") {
              projectGroups.machineLearning.push(node)
            } else {
              projectGroups.other.push(node)
            }
            return projectGroups
          })
          return (
            <div>
              <ProjectsSection
                title="front-end"
                nodes={projectGroups.frontEnd}
                style={{ marginTop: "0" }}
              />
              <ProjectsSection
                title="machine learning"
                nodes={projectGroups.machineLearning}
              />
              <ProjectsSection title="other" nodes={projectGroups.other} />
            </div>
          )
        }}
      />
    )
  }
}
