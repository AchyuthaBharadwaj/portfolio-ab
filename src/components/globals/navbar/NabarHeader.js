import React, { Component } from "react"
import { Link } from "gatsby"
import { FaEllipsisH } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"
import portrait from "../../../images/portrait.jpg"

export default class NabarHeader extends Component {
  render() {
    const { toggleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={portrait} alt="AB" className="portrait" />
        </Link>
        <FaEllipsisH className="toggleIcon" onClick={() => toggleNavbar()} />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  z-index: 3;
  justify-content: space-between;
  .toggleIcon {
    font-size: 1.75rem;
    color: ${styles.newColors.navFore};
    cursor: pointer;
  }
  .portrait {
    height: 50px;
    width: 50px;
    border-radius: 8px;
    box-shadow: 0 0 5px ${styles.newColors.navBack};
  }
  @media (min-width: 1000px) {
    .toggleIcon {
      display: none;
    }
    .portrait {
      height: 90px;
      width: 90px;
      margin-top: 50px;

      &:hover {
        transform: scale(1.1) translate(5px, 5px);
        ${styles.transDefault};
      }
    }
  }
`
