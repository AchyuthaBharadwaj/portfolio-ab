import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "../utils"
import Bars from "../components/globals/Bars"

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" keywords={[`gatsby`, `application`, `react`]} />
    <Bars />
    <Section>
      <h1>Experience page</h1>
      <p>coming soon..</p>
    </Section>
  </Layout>
)

export default ExperiencePage
