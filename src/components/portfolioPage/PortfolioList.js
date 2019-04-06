import React, { Component } from "react"
import PortfolioCard from "./PortfolioCard"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../utils"

const PORTFOLIO_LIST = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { includeOnPortfolio: { eq: true } }
      }
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
        <div className="viewMore">
          <Link to="/projects/">View More</Link>
        </div>
      </ProblemListWrapper>
    )
  }
}

const ProblemListWrapper = styled.div`
  margin-bottom: 2rem;
  .viewMore {
    text-align: center;
    margin: 1rem 0 3rem 0;
    a {
      width: 200px;
      height: 60px;
      background: ${styles.newColors.buttonBack};
      box-shadow: 0 0 10px ${styles.newColors.navBack};
      display: inline-block;
      line-height: 57px;
      text-decoration: none;
      color: ${styles.colors.mainWhite};
      border-radius: 0.6rem;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 10px ${styles.newColors.linkColor};
        ${styles.transObject({ time: "0.3s" })};
      }
    }
  }
`
