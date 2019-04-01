import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "../utils"
import Bars from "../components/globals/Bars"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <Bars />
    <Section>
      <h1>About page</h1>
      <p>coming soon..</p>
    </Section>
  </Layout>
)

export default AboutPage