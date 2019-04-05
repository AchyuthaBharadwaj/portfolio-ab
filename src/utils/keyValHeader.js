import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export default function KeyValHeader({ text, val }) {
  return (
    <KeyValHeaderWrapper>
      <p className="text">{text}</p>
      <h3 className="val">{val}</h3>
    </KeyValHeaderWrapper>
  )
}

const KeyValHeaderWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;

  .text {
    margin-right: 10px;
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 300;
    color: ${styles.colors.mainYellow};
  }
  .val {
    font-size: 1rem;
    text-transform: capitalize;
    font-weight: 400;
  }

  @media (min-width: 768px) {
    .text {
      font-size: 0.8rem;
    }
    .val {
      font-size: 1.2rem;
    }
  }
`
