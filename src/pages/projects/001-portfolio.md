---
id: "1"
title: "portfolio-ab.netlify.com"
shortdesc: "created blazing fast personal portfolio with ReactJs, GatsbyJs, SASS, Styled components and more."
path: "/projects/portfolio-ab"
date: 2019-04-02 07:00:00
tags: "react, gatsby, sass"
---

asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
asdfasdfasdfasdfasdf
asdfasdfasdf

```
query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___problem], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            problem
            title
            solution
            date(formatString: "MMM Do YYYY")
            type
            shortdesc
            tags
          }
          excerpt
        }
      }
    }
  }
```
