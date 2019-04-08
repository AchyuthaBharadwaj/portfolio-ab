import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { Link } from "gatsby"
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa"

const colors = {
  python: {
    fore: "#262626",
    back: "#F0DF5A",
  },
  gatsbyJs: {
    fore: "#fff",
    back: "#41b883",
  },
  css: {
    fore: "#fff",
    back: "#563D7C",
  },
}

export default function ProjectCard({ node, index }) {
  const { fore, back } = colors[node.frontmatter.language]
  return (
    <ProjectCardWrapper
      to={node.frontmatter.path}
      languageBack={back}
      languagefore={fore}
      index={index}
    >
      <div className="headers">
        <p className="title">{node.frontmatter.title}</p>
        <p className="language">{node.frontmatter.language}</p>
      </div>
      <p className="description">{node.frontmatter.shortdesc}</p>
      <div className="cardFooter">
        <div className="date">
          <FaCalendarAlt />
          <p className="dateVal">{node.frontmatter.date}</p>
        </div>
        <FaArrowRight className="moreInfoIcon" />
      </div>
    </ProjectCardWrapper>
  )
}

const ProjectCardWrapper = styled(Link)`
  width: 100%;
  height: 13rem;
  margin: 1rem auto;
  background: ${styles.newColors.abotmecard};
  border-radius: 0.6rem;
  box-shadow: 0 0 10px ${styles.newColors.navBack};
  display: block;
  text-decoration: none;
  color: ${styles.colors.mainWhite};
  padding: 1.5rem 1rem;
  font-weight: 300;

  .headers {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.3rem;
    font-weight: 400;
    .title {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      width: 13rem;
      text-overflow: ellipsis;
      font-size: 1.2rem;
    }
    .language {
      color: ${props => props.languagefore};
      background: ${props => props.languageBack};
      padding: 0.3rem 0.6rem;
      border-radius: 0.3rem;
      box-shadow: 0 0 10px ${styles.newColors.navBack};
      text-transform: capitalize;
      transform: translateY(-5px);
    }
  }
  .description {
    min-height: calc(100% - 4rem);
    max-height: calc(100% - 4rem);
    font-size: 0.9rem;
  }
  .cardFooter {
    display: flex;
    justify-content: space-between;
    .date {
      display: flex;
      .dateVal {
        margin-left: 0.5rem;
      }
    }
    .moreInfoIcon {
      transform: translateX(-5px);
    }
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px ${styles.newColors.linkColor};
    .moreInfoIcon {
      transform: translateX(0px);
      color: ${styles.colors.mainGrey};
      ${styles.transObject({ time: "0.3s" })};
    }
    ${styles.transObject({ time: "0.3s" })};
  }
`
