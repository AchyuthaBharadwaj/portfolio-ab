import React, { Component } from "react"
import PortfolioCard from "./PortfolioCard"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const PORTFOLIO_LIST = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { includeOnPortfolio: { eq: true } }
      }
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
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default class PortfolioList extends Component {
  render() {
    return (
      <ProblemListWrapper>
        <StaticQuery
          query={PORTFOLIO_LIST}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }, index) => (
                  <PortfolioCard key={index} node={node} index={index} />
                ))}
              </div>
            )
          }}
        />
      </ProblemListWrapper>
    )
  }
}

const ProblemListWrapper = styled.div`
  margin-bottom: 2rem;
`
