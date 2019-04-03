import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../utils"
import Bars from "../components/globals/Bars"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Bars />
    <Banner title="404" subtitle="sadly that page doesnot exist" />
  </Layout>
)

export default NotFoundPage
