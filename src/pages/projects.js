import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../utils"
import Bars from "../components/globals/Bars"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Bars />
    <Banner title="lab" subtitle="comprehensive list of my recent works." />
  </Layout>
)

export default ProjectsPage
