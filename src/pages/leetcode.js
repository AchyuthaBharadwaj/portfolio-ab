import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../utils"
import Bars from "../components/globals/Bars"
import ProbsList from "../components/leetcodePage/ProbsList"

const LeetCodePage = () => (
  <Layout>
    <SEO title="LeetCode" keywords={[`gatsby`, `application`, `react`]} />
    <Bars />
    <Banner title="LeetCode" subtitle="Leetcode problems solved!" />
    <ProbsList />
  </Layout>
)

export default LeetCodePage
