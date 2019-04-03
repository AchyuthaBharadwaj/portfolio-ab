import React, { Component } from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"
import { FaArrowRight, FaTags } from "react-icons/fa"
import { Link } from "gatsby"

export default class Problem extends Component {
  render() {
    const node = this.props.node
    const index = this.props.index
    let backColor = "green"
    if (node.frontmatter.type === "medium") {
      backColor = styles.colors.mainYellow
    } else if (node.frontmatter.type === "hard") {
      backColor = "red"
    }
    let tags = node.frontmatter.tags.split(",")
    return (
      <ProblemContainer key={node.id} index={index}>
        <Link
          to={node.frontmatter.path}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <ProblemWrapper>
            <div className="problemTitle">
              <h1>
                Problem #{node.frontmatter.problem}:{" "}
                <span>{node.frontmatter.title}</span>
              </h1>
              <div>
                <p className="difficulty" style={{ background: backColor }}>
                  {node.frontmatter.type}
                </p>
              </div>
            </div>
            <p className="problemDef">{node.frontmatter.shortdesc}</p>
            <h4 className="solutionInfo">
              <span>
                Solution:
                <span className="solution">{node.frontmatter.solution}</span>
              </span>
            </h4>
            <h4 className="moreInfo">
              <div className="tags">
                <FaTags className="tags-icon" />
                {tags.slice(0, 2).map(tag => {
                  return (
                    <span key={tag} className="tags-box">
                      #{tag}
                    </span>
                  )
                })}
              </div>
              <span>
                <FaArrowRight className="icon" />
              </span>
            </h4>
          </ProblemWrapper>
        </Link>
      </ProblemContainer>
    )
  }
}

const ProblemContainer = styled.div`
  animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
    calc(${props => props.index} * 400ms) both;
`

const ProblemWrapper = styled(Section)`
  width: 80%;
  margin: 0 auto;
  background: ${styles.newColors.abotmecard};
  border-radius: 1rem;
  min-height: 10rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  .problemTitle {
    display: flex;
    justify-content: space-between;

    h1 {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      width: 13rem;
      height: 2.5rem;
      text-overflow: ellipsis;
      font-weight: 300;
      font-size: 1.1rem;
      text-transform: capitalize;
      span {
        font-weight: 700;
        font-size: 1.3rem;
      }
    }

    .difficulty {
      color: ${styles.newColors.navBack};
      font-weight: 700;
      padding: 0.2rem 1rem;
      text-transform: capitalize;
      border-radius: 0.3rem;
      font-size: 0.7rem;
      margin-top: 2px;
    }
  }

  .problemDef {
    font-weight: 300;
    padding-bottom: 1rem;
    font-size: 0.9rem;
  }

  .solutionInfo {
    margin-bottom: 1rem;
    .solution {
      margin-left: 1rem;
      font-size: 0.7rem;
      font-weight: 300;
      padding: 0.3rem 1rem;
      background: #2c3e50;
      border-radius: 2rem;
      text-transform: capitalize;
    }
  }

  .moreInfo {
    display: flex;
    justify-content: space-between;
    .icon {
      font-size: 1rem;
      margin-right: 0.5rem;
    }
    .tags-box {
      margin-left: 0.5rem;
      font-size: 0.7rem;
      font-weight: 300;
      padding: 0.3rem 1rem;
      background: ${styles.newColors.tagBack};
      border-radius: 2rem;
      text-transform: capitalize;
    }
    .tags {
      display: flex;
    }
    .tags-icon {
      margin-top: 5px;
    }
  }

  &:hover {
    transform: translateY(-5px) !important;
    ${styles.transObject({ time: "0.2s" })};
    cursor: pointer;
    .moreInfo {
      .icon {
        transform: translateX(0.5rem);
        color: ${styles.colors.mainGrey};
        ${styles.transObject({ time: "0.2s" })};
      }
    }
  }

  @media (min-width: 768px) {
    .problemDef {
      font-size: 1rem;
    }
    .problemTitle {
      h1 {
        width: 40rem;
        span {
          font-size: 1.5rem;
        }
      }

      .difficulty {
        padding: 0.2rem 1rem;
        margin-top: 0.2rem;
        font-size: 0.9rem;
      }
    }
  }
`
