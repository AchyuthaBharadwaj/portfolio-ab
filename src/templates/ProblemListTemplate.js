import React from "react"
import styled from "styled-components"
import { Section, Banner, Pagination } from "../utils"
import { graphql } from "gatsby"
import Problem from "../components/leetcodePage/Problem"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bars from "../components/globals/Bars"

export default function ProblemListTemplate({ data, pageContext }) {
  return (
    <Layout>
      <SEO title="LeetCode" keywords={[`gatsby`, `application`, `react`]} />
      <Bars />
      <Banner
        title="LeetCode"
        subtitle={`Page ${pageContext.currentPage}/${pageContext.numOfPages}`}
      />
      <ProbsListSection>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <Problem key={index} node={node} index={index} />
        ))}
        <Pagination
          currentPage={pageContext.currentPage}
          numOfPages={pageContext.numOfPages}
        />
      </ProbsListSection>
    </Layout>
  )
}

export const FIND_PROBS = graphql`
  query problemByPage($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/leetcode/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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

const ProbsListSection = styled(Section)`
  overflow-y: hidden;
`
