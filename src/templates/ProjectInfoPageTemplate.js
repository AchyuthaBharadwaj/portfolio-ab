import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, KeyValHeader, styles, BackButton } from "../utils"
import Bars from "../components/globals/Bars"
import styled from "styled-components"

export default function ProjectInfoPageTemplate({ data }) {
  const project = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title="Projets" keywords={[`gatsby`, `application`, `react`]} />
      <Bars />
      <PageWrapper>
        <h1 className="pageTitle">{project.title}</h1>
        <InfoSection>
          <KeyValHeader text="date" val={project.date} />
          <KeyValHeader text="category" val={project.type} />
          <KeyValHeader text="short description" val={project.shortdesc} />
          <div
            className="postContainer gatsby-highlight"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          <div>
            <BackButton link="/projects/" />
          </div>
        </InfoSection>
      </PageWrapper>
    </Layout>
  )
}

const PageWrapper = styled.div`
  margin-bottom: 2rem;
  .pageTitle {
    text-align: center;
    padding: 2rem;
  }
`

const InfoSection = styled(Section)`
  width: 85vw;
  padding: 1rem 2rem 2rem 2rem;
  border-radius: 0.6rem;
  background: ${styles.newColors.abotmecard};
  .postContainer {
    margin: 2rem 0;
    line-height: 2rem;
    a {
      color: ${styles.newColors.linkColor};
      white-space: pre-wrap; /* css-3 */
      white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
      white-space: -pre-wrap; /* Opera 4-6 */
      white-space: -o-pre-wrap; /* Opera 7 */
      word-wrap: break-word; /* Internet Explorer 5.5+ */
    }

    ul {
      padding-left: 2rem;
    }

    h2 {
      margin: 2rem 0 1rem 0;
      font-weight: 500;
      font-size: 1.7rem;
      color: ${styles.colors.mainYellow};
      display: flex;
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

    img {
      width: 90%;
      box-shadow: 0 0 10px ${styles.newColors.navBack} !important;
      border-radius: 0.6rem;
    }
  }

  @media (min-width: 768px) {
    width: 70vw;
    max-width: 1000px;
    .postContainer {
    }
  }
`

export const projectQuery = graphql`
  query projectBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        path
        title
        shortdesc
        date(formatString: "MMM Do YYYY")
        type
      }
    }
  }
`
