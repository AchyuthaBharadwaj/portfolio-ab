import React from "react"
import { Section, styles } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import SocialIcons from "../globals/socialIcons"

export default function Intro() {
  return (
    <IntroWrapper>
      <h1 className="title-intro">Hello, my name is</h1>
      <h1 className="title">Achyutha Bharadwaj.</h1>
      <p className="title-description">
        I am a <strong>Front-end developer</strong>. I am currently pursuing{" "}
        <strong>Masters degree</strong> in <strong>Computer Science</strong> at{" "}
        <strong>ASU</strong>. In my spare time{" "}
        <Link to="/leetcode/">I solve LeetCode problems</Link> and contribute to{" "}
        <Link to="/projects/">open source</Link> projects.
      </p>
      <SocialIcons className="socialIcons" />
    </IntroWrapper>
  )
}

const IntroWrapper = styled(Section)`
  text-align: center;
  overflow-y: hidden;
  .socialIcons {
    animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 1600ms both;
  }
  .title-intro {
    padding-top: 22vh;
    font-size: 2rem;
    font-weight: 200;
    animation: slide-down 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 400ms both;
  }
  .title {
    padding: 0.8rem 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    animation: fade-in 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 800ms both;
  }
  .title-description {
    animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 1200ms both;
    padding-bottom: 2rem;
    strong {
      color: ${styles.newColors.linkColor};
    }
    a {
      text-decoration: none;
      color: ${styles.newColors.linkColor};
      line-height: 0.9rem;
      border-bottom: 1px solid ${styles.newColors.linkColor};
    }
  }

  @media (min-width: 768px) {
    text-align: left;
    .title-intro {
      padding-top: 20vh;
      font-size: 3rem;
      font-weight: 200;
    }
    .title {
      padding: 0.8rem 0 1rem 0;
      font-size: 3.5rem;
      font-weight: 700;
    }
    .title-description {
      font-size: 1.2rem;
      width: 75%;
    }
  }

  @media (min-width: 1000px) {
    .title-intro {
      padding-top: 20vh;
      font-size: 3.5rem;
      font-weight: 200;
    }
    .title {
      padding: 0.8rem 0 1rem 0;
      font-size: 4rem;
      font-weight: 700;
    }
    .title-description {
      font-size: 1.3rem;
    }
  }

  @keyframes slide-down {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
