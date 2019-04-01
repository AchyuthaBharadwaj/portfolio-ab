import React, { Component } from "react"
import { Section, styles } from "../../utils"
import styled from "styled-components"
import ProfilePic from "../../images/portrait.jpg"
import SocialIcons from "../globals/socialIcons"
import Skills from "../globals/Skills"

export default class Left extends Component {
  render() {
    return (
      <LeftSectionWrapper className={this.props.className}>
        <LeftWrapper>
          <img src={ProfilePic} alt="profile-pic" className="profilePic" />
          <SocialIcons className="socialIcons" />
          <h1>my skills</h1>
          <div className="skillsGrid">
            <Skills gridCols="4" />
          </div>
        </LeftWrapper>
      </LeftSectionWrapper>
    )
  }
}

const LeftSectionWrapper = styled(Section)`
  max-width: 300px;

  @media (min-width: 1000px) {
    margin: 0 1.5rem 0 auto;
    width: calc(100% - 3rem);
    max-width: 400px;
  }
`

const LeftWrapper = styled.div`
  display: block;
  background: ${styles.newColors.abotmecard};
  border-radius: 0.6rem;
  margin-top: -1.5rem;
  text-align: center;

  .profilePic {
    width: 250px;
    height: 250px;
    margin: 1.5rem 1.5rem;
    border-radius: 0.6rem;
  }

  .socialIcons {
    width: 90%;
    margin-bottom: 1.5rem;
    margin: 0 auto;
  }

  h1 {
    text-transform: capitalize;
    font-size: 1.4rem;
    padding-bottom: 1.5rem;
  }

  .skillsGrid {
    display: inline-block;
  }

  @media (min-width: 1000px) {
    margin-top: 0rem;
    .profilePic {
      width: 300px;
      height: 300px;
      margin: 1.5rem auto;
      border-radius: 0.6rem;
    }
    .socialIcons {
      width: 90%;
      margin-bottom: 1.5rem;
    }
  }
`
