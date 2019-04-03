import React, { Component } from "react"
import styled from "styled-components"
import { Section, Pagination } from "../../utils"
import { graphql, StaticQuery } from "gatsby"
import Problem from "./Problem"
import { maxProblemsPerPage } from "../../utils/config"

const FIND_PROBS = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/leetcode/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            problem
            title
            solution
            date(formatString: "MMM Do YYYY")
            type
            shortdesc
            tags
          }
          excerpt
        }
      }
    }
  }
`

export default class ProbsList extends Component {
  render() {
    return (
      <ProbsListSection>
        <StaticQuery
          query={FIND_PROBS}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges
                  .slice(0, maxProblemsPerPage)
                  .map(({ node }, index) => (
                    <Problem key={index} node={node} index={index} />
                  ))}
                <Pagination
                  currentPage={1}
                  numOfPages={Math.ceil(
                    data.allMarkdownRemark.totalCount / maxProblemsPerPage
                  )}
                />
              </div>
            )
          }}
        />
      </ProbsListSection>
    )
  }
}

const ProbsListSection = styled(Section)`
  overflow-y: hidden;
`
