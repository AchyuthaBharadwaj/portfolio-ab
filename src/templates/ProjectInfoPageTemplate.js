import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../utils"
import Bars from "../components/globals/Bars"

export default function ProjectInfoPageTemplate({ data }) {
  const project = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Projets" keywords={[`gatsby`, `application`, `react`]} />
      <Bars />
      <Banner title={project.title} subtitle={project.shortdesc} />
    </Layout>
  )
}

export const projectQuery = graphql`
  query projectBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        path
        title
        shortdesc
      }
    }
  }
`
