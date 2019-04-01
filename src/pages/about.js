import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../utils"
import Bars from "../components/globals/Bars"
import Right from "../components/aboutPage/Right"
import Left from "../components/aboutPage/Left"
import styled from "styled-components"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Bars />
    <Banner
      title="about me"
      subtitle="coding is not just my passion; its my Life."
    />
    <AboutWrapper>
      <Right className="right" />
      <Left className="left" />
    </AboutWrapper>
  </Layout>
)

const AboutWrapper = styled.div`
  .right {
    animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 400ms both;
  }
  @media (min-width: 1000px) {
    max-width: 1700px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 400px 1fr;

    .right {
      grid-column: 2;
      grid-row: 1;
      animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 900ms both;
    }
    .left {
      grid-column: 1;
      grid-row: 1;
      animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
    }
  }
`

export default AboutPage
