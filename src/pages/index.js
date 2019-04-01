import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/landingPage/Intro"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
  </Layout>
)

export default IndexPage
