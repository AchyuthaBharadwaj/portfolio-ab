import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { graphql, StaticQuery } from "gatsby"

const ALL_SKILLS = graphql`
  query {
    getSkills: allFile(
      filter: { relativeDirectory: { eq: "skills-svg" } }
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          id
          publicURL
          name
        }
      }
    }
  }
`

export default class Skills extends Component {
  render() {
    return (
      <SkillsWrapper
        gridCols={this.props.gridCols}
        className={this.props.className}
      >
        <StaticQuery
          query={ALL_SKILLS}
          render={data => {
            const skills = data.getSkills.edges
            return skills.map(({ node }) => {
              return (
                <li className="tooltip skill" key={node.id}>
                  <img
                    src={node.publicURL}
                    alt={node.name}
                    className="skillImg"
                  />
                  <span className="tooltiptext">{node.name}</span>
                </li>
              )
            })
          }}
        />
      </SkillsWrapper>
    )
  }
}

const SkillsWrapper = styled.ul`
  list-style: none;
  padding-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(${props => props.gridCols}, 50px);
  grid-gap: 0.8rem;

  .skill {
    font-size: 2rem;
    padding-top: 0.4rem;
    border-radius: 0.6rem;
    background: ${styles.newColors.skillback};
    .skillImg {
      width: 32px;
      height: 32px;
    }
  }

  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
    .tooltiptext {
      visibility: hidden;
      width: 100px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      position: absolute;
      top: -25px;
      left: -20px;
      z-index: 1;
      font-size: 0.7rem;
    }
    &:hover {
      box-shadow: 0 0 20px #fff;
      cursor: pointer;
      transform: scale(1.1);
      ${styles.transObject({ time: "0.1s" })};
      .tooltiptext {
        visibility: visible;
      }
    }
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(${props => props.gridCols}, 60px);
    grid-gap: 1rem;
    .skill {
      .skillImg {
        margin: 7px 5px 5px 5px;
      }
    }
  }
`
