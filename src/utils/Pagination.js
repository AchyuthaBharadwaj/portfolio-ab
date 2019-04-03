import React from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { styles, Section } from "../utils"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Pagination({ currentPage, numOfPages }) {
  let cols = numOfPages + 2
  if (currentPage === 1) {
    cols -= 1
  } else if (currentPage === numOfPages) {
    cols -= 1
  }
  cols = cols > 5 ? 5 : cols
  const previousPageLink =
    currentPage === 2 ? `/leetcode/` : `/leetcode/page/${currentPage - 1}`
  const nextPageLink = `/leetcode/page/${currentPage + 1}`
  return (
    <Section>
      {numOfPages > 1 && (
        <PaginationWrapper columns={cols}>
          {currentPage > 1 && (
            <Link to={previousPageLink} className="paginationItem">
              <FaArrowLeft className="paginationIcon" />
            </Link>
          )}
          {Array.from({ length: numOfPages }).map((_, index) => {
            return (
              <div className="paginationItem" key={index}>
                {index === 0 ? (
                  <Link to={`/leetcode/`}>
                    <h1>{index + 1}</h1>
                  </Link>
                ) : (
                  <Link to={`/leetcode/page/${index + 1}`}>
                    <h1>{index + 1}</h1>
                  </Link>
                )}
              </div>
            )
          })}
          {currentPage < numOfPages && (
            <Link to={nextPageLink} className="paginationItem">
              <FaArrowRight className="paginationIcon" />
            </Link>
          )}
        </PaginationWrapper>
      )}
    </Section>
  )
}

const PaginationWrapper = styled(Section)`
  margin: 0 auto;
  width: calc(${props => props.columns} * 50px);
  max-width: 350px;
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  .paginationItem {
    text-decoration: none;
    color: ${styles.newColors.navFore};
    text-align: center;
    margin: 0 10px 0 0;
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
    border-radius: 50%;
    line-height: 40px;
    background: ${styles.newColors.tagBack};
    box-shadow: 0 0 50px ${styles.newColors.navBack};
    h1 {
      font-weight: 300;
    }

    a {
      text-decoration: none;
      color: ${styles.newColors.navFore};
    }

    .paginationIcon {
      margin-top: 10px;
      margin-left: 0;
    }

    &:hover {
      transform: translateY(-5px);
      ${styles.transObject({ time: "0.4s" })}
    }
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }

  @media (min-width: 1000px) {
    max-width: 800px;
  }
`
