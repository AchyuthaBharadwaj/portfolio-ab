---
id: "5"
title: "Jekyll Blog"
shortdesc: "Superfast blog built by customizing opensource jekyll theme."
path: "/projects/jekyll-blog-ab"
date: 2018-02-02 07:00:00
tags: "jekyll"
type: "front-end"
includeOnPortfolio: true
thumbnail: ./jekyll-blog.PNG
language: "css"
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
