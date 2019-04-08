import React, { Component } from "react"
import ProjectCard from "./ProjectCard"
import styled from "styled-components"
import { Section, styles } from "../../utils"

export default class ProjectsSection extends Component {
  render() {
    return (
      <ProjectSectionWrapper className={this.props.className}>
        <h1 className="sectionTitle">{this.props.title}</h1>
        <div className="cardsWrapper">
          {this.props.nodes.map((node, index) => {
            return (
              <ProjectCardWrapper key={index} index={index}>
                <ProjectCard node={node} index={index} />
              </ProjectCardWrapper>
            )
          })}
        </div>
      </ProjectSectionWrapper>
    )
  }
}

const ProjectCardWrapper = styled.div`
  animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
    calc(${props => props.index} * 400ms) both;
`

const ProjectSectionWrapper = styled(Section)`
  width: 70vw;
  .sectionTitle {
    padding-bottom: 0.5rem;
    font-weight: 500;
    color: ${styles.colors.mainYellow};
    display: flex;
    text-transform: capitalize;
    font-size: 1.2rem;
    &:after {
      content: " ";
      background: linear-gradient(
        to right,
        rgba(32, 104, 130, 0.6),
        rgb(0, 61, 76)
      );
      height: 2px;
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: auto;
      margin: 0.75em 2px 0 5px;
      flex-grow: 1;
      border-radius: 2px;
    }
  }

  @media (min-width: 900px) {
    width: 80vw;
    .sectionTitle {
      font-size: 1.5rem;
    }
    .cardsWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
    }
  }

  @media (min-width: 1300px) {
    .cardsWrapper {
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 2rem;
    }
  }
`
