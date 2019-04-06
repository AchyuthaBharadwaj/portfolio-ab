import React from "react"
import { Section, styles } from "../../utils"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "gatsby"

export default function PortfolioCard({ node, index }) {
  const isIndexOdd = index % 2 === 0
  return (
    <ProjectContainer index={index}>
      <LinkWrapper to={node.frontmatter.path}>
        <PortfolioCardWrapper isIndexOdd={isIndexOdd}>
          <div className="titleImageContainer">
            <div className="imageWrapper">
              <Img
                fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                className="titleImage"
              />
            </div>
          </div>
          <div className="content">
            <h1 className="contentTitle">{node.frontmatter.title}</h1>
            <p className="description">{node.frontmatter.shortdesc}</p>
            <div className="moreInfo">
              <p className="moreInfoText">view more</p>
              <FaArrowRight className="moreInfoIcon" />
            </div>
          </div>
        </PortfolioCardWrapper>
      </LinkWrapper>
    </ProjectContainer>
  )
}

const ProjectContainer = styled(Section)`
  animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
    calc(${props => props.index} * 400ms) both;
  width: 70vw;
  max-width: 1000px;
`

const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: ${styles.colors.mainWhite};
  display: inline-block;
`

const PortfolioCardWrapper = styled.div`
  background: ${styles.newColors.abotmecard};
  box-shadow: 0 0 10px ${styles.newColors.navBack};
  padding: 0 0;
  font-weight: 300;
  border-radius: 0.6rem;

  .titleImageContainer {
    width: 100%;
    padding: 2rem;
    background: ${styles.newColors.navFore};
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
    background-color: #013a6b;
    background-image: -webkit-linear-gradient(30deg, #013a6b 50%, #004e95 50%);

    .imageWrapper {
      .titleImage {
        height: 100%;
        max-height: 270px;
        width: 100%;
        border-radius: 0.6rem;
        box-shadow: 0 0 30px ${styles.colors.mainBlack};
      }
    }
  }

  .content {
    padding: 1rem 2rem;
    .contentTitle {
      color: ${styles.colors.mainYellow};
      padding-bottom: 1rem;
      font-size: 1.3rem;
    }
    .description {
      padding-bottom: 1rem;
      font-size: 0.9rem;
    }
    .moreInfo {
      display: flex;
      text-transform: capitalize;
      font-weight: 400;
      padding-bottom: 1rem;
      .moreInfoIcon {
        transform: translate(3px, 2px);
        animation: slide-right 1s ease-out infinite;
      }

      @keyframes slide-right {
        0% {
          transform: translate(3px, 2px);
        }
        50% {
          transform: translate(10px, 2px);
          color: ${styles.colors.mainGrey};
        }
        100% {
          transform: translate(3px, 2px);
        }
      }
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 10px ${styles.newColors.linkColor};
    ${styles.transObject({ time: "0.3s" })};
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: ${props =>
      !props.isIndexOdd ? `0.6fr 0.4fr` : `0.4fr 0.6fr`};
    height: 350px;
    width: 70vw;
    max-width: 1000px;

    .titleImageContainer {
      grid-column: ${props => (props.isIndexOdd ? `2` : `1`)};
      grid-row: 1;
      height: 350px;
      border-top-left-radius: ${props =>
        props.isIndexOdd ? `0rem` : `0.6rem`};
      border-top-right-radius: ${props =>
        props.isIndexOdd ? `0.6rem` : `0rem`};
      border-bottom-right-radius: ${props =>
        props.isIndexOdd ? `0.6rem` : `0rem`};
      border-bottom-left-radius: ${props =>
        props.isIndexOdd ? `0rem` : `0.6rem`};
      overflow: hidden;
      .imageWrapper {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        .titleImage {
          height: 100%;
          width: 100%;
          border-radius: 0.6rem;
          box-shadow: 0 0 30px ${styles.colors.mainBlack};
        }
      }
    }

    .content {
      grid-column: ${props => (props.isIndexOdd ? `1` : `2`)};
      grid-row: 1;
      display: block;
      margin: auto 1rem;
      .contentTitle {
        color: ${styles.colors.mainYellow};
        padding-bottom: 1rem;
        font-size: 1.6rem;
      }
      .description {
        padding-bottom: 1rem;
        font-size: 1rem;
      }
    }
  }
`
