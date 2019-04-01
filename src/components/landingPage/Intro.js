import React from "react"
import { Section, styles } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Intro() {
  return (
    <IntroWrapper>
      <h1 className="title-intro">Hello, my name is</h1>
      <h1 className="title">Achyutha Bharadwaj.</h1>
      <p className="title-description">
        I am a <strong>Front-end developer</strong>. I am currently pursuing{" "}
        <strong>Masters degree</strong> in <strong>Computer Science</strong> at{" "}
        <strong>ASU</strong>. In my spare time{" "}
        <Link to="/">I write on my blog</Link> and contribute to{" "}
        <Link to="/">open source</Link> projects.
      </p>
    </IntroWrapper>
  )
}

const IntroWrapper = styled(Section)`
  text-align: center;
  .title-intro {
    padding-top: 22vh;
    font-size: 2rem;
    font-weight: 200;
  }
  .title {
    padding: 0.8rem 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
  }
  .title-description {
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
      padding-top: 22vh;
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
    }
  }

  @media (min-width: 1000px) {
    .title-intro {
      padding-top: 21vh;
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
`
