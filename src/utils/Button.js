import React from "react"
import styled from "styled-components"
import { styles } from "../utils"
import { Link } from "gatsby"
import { FaArrowLeft } from "react-icons/fa"

function BackButton({ link }) {
  return (
    <BackButtonWrapper to={link}>
      <FaArrowLeft className="icon" />
      <p className="text">back</p>
    </BackButtonWrapper>
  )
}

const BackButtonWrapper = styled(Link)`
  width: 150px;
  height: 60px;
  color: white;
  text-transform: capitalize;
  border-radius: 0.6rem;
  text-align: center;
  display: flex;
  background: #2c3e50;
  line-height: 60px;
  box-shadow: 0 0 15px ${styles.newColors.navBack};
  font-weight: 400;
  align-items: center;
  color: white;
  text-decoration: none;

  .icon {
    transform: translateX(40px);
  }
  .text {
    transform: translateX(50px);
  }
  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
    background: ${styles.colors.mainGrey};
    ${styles.transObject({ time: "0.3s" })};
  }
`

export { BackButton }
