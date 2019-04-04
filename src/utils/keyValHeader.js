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
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 400;
    color: ${styles.colors.mainYellow};
  }
  .val {
    font-size: 1.2rem;
    text-transform: capitalize;
    font-weight: 500;
  }
`
