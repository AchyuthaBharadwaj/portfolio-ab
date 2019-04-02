import React from "react"
import { styles, Section } from "../../utils"
import styled from "styled-components"

export default function Card({ children }) {
  return <CardWrapper>{children}</CardWrapper>
}

const CardWrapper = styled(Section)`
  /* background: ${styles.newColors.abotmecard}; */
  border-radius: 0.6rem;
  min-height: 300px;
`
