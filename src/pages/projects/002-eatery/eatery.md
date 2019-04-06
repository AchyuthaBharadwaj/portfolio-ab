---
id: "2"
title: "Eatery"
shortdesc: "An awesome restaurant landing page built with GatsbyJs, graphql, styled components and much more."
path: "/projects/eatery-ab"
date: 2019-03-02 07:00:00
tags: "react, gatsby, sass"
type: "front-end"
language: "gatsbyJs"
includeOnPortfolio: true
thumbnail: ./eatery.PNG
---

asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
asdfasdfasdfasdfasdf
asdfasdfasdf

```javascript
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