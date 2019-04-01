import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section } from "../utils"
import Bars from "../components/globals/Bars"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Bars />
    <Section>
      <h1>Projects page</h1>
      <p>coming soon..</p>
    </Section>
  </Layout>
)

export default ProjectsPage
