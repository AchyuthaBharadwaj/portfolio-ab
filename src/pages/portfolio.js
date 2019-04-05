import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../utils"
import Bars from "../components/globals/Bars"
import PortfolioList from "../components/portfolioPage/PortfolioList"

const ExperiencePage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <Bars />
    <Banner title="Portfolio" subtitle="here are some of my selected works." />
    <PortfolioList />
  </Layout>
)

export default ExperiencePage
