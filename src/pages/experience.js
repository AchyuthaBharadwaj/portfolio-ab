import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../utils"
import Bars from "../components/globals/Bars"

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" keywords={[`gatsby`, `application`, `react`]} />
    <Bars />
    <Banner title="Experience" subtitle="my professional experience so far." />
  </Layout>
)

export default ExperiencePage
