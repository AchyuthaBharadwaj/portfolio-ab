import React from "react"
import Layout from "../components/layout"
import Bars from "../components/globals/Bars"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Banner, Section } from "../utils"

export default function SinglePost({ data }) {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} keywords={[`gatsby`, `application`, `react`]} />
      <Bars />
      <Banner title={post.title} subtitle={`Problem #${post.problem}`} />
      <Section>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Section>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        problem
        title
        shortdesc
        path
        date(formatString: "MMM Do YYYY")
        tags
        solution
        type
      }
    }
  }
`
