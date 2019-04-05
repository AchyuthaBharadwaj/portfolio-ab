import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { styles } from "../utils"
import Bars from "../components/globals/Bars"
import { FaCheck } from "react-icons/fa"
import styled from "styled-components"

export default function ThanksPage() {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <Bars />
      <IconWrapper>
        <FaCheck className="icon" />
        <h1 className="heading">many thanks..</h1>
        <p>
          I have recieved your message and will respond as soon as possible.
        </p>
      </IconWrapper>
    </Layout>
  )
}

const IconWrapper = styled.div`
  width: 60vw;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  .heading {
    text-transform: capitalize;
    padding-bottom: 0.5rem;
  }
  .icon {
    font-size: 5rem;
    color: ${styles.colors.mainYellow};
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`
