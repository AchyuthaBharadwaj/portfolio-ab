import React from "react"
import Layout from "../components/layout"
import Bars from "../components/globals/Bars"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Banner, Section, styles, KeyValHeader, BackButton } from "../utils"
import styled from "styled-components"

export default function SinglePost({ data }) {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} keywords={[`gatsby`, `application`, `react`]} />
      <Bars />
      <Banner title={`Problem #${post.problem}`} subtitle={post.title} />
      <PostWrapper>
        <div>
          <BackButton link="/leetcode/" />
        </div>
        <h2>problem details</h2>
        <KeyValHeader text="problem" val={post.problem} />
        <KeyValHeader text="title" val={post.title} />
        <KeyValHeader text="short description" val={post.shortdesc} />
        <div
          className="postContainer gatsby-highlight"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <div className="lastDiv">
          <BackButton link="/leetcode/" />
        </div>
      </PostWrapper>
    </Layout>
  )
}

const PostWrapper = styled(Section)`
  background: ${styles.newColors.abotmecard};
  border-radius: 0.6rem;
  width: 70vw;
  padding: 2rem;
  line-height: 1.5rem;
  font-weight: 200;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .lastDiv {
    margin-top: 1.5rem;
  }

  h2 {
    padding: 2.5rem 0 0.5rem 0;
    font-weight: 500;
    color: ${styles.colors.mainYellow};
    display: flex;
    text-transform: capitalize;
    &:after {
      content: " ";
      background: linear-gradient(
        to right,
        rgba(32, 104, 130, 0.6),
        rgb(0, 61, 76)
      );
      height: 2px;
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: auto;
      margin: 0.75em 2px 0 5px;
      flex-grow: 1;
      border-radius: 2px;
    }
  }
  .postContainer {
    margin: 0 auto;

    p {
      padding: 1rem 0 0 0;
    }
    pre {
      background: ${styles.newColors.navBack};
      border-radius: 0.6rem;
      page-break-inside: avoid;
      font-family: monospace;
      font-size: 15px;
      line-height: 1.6;
      margin: 1rem auto 0 0;
      max-width: 100%;
      overflow: auto;
      padding: 1em 1.5em;
      display: block;
      word-wrap: break-word;
      code {
        font-family: "Raleway", sans-serif;
      }
    }
  }
`

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
