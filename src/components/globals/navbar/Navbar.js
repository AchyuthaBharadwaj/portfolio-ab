import React, { Component } from "react"
import NavbarHeader from "./NabarHeader"
import NavbarLinks from "./NavbarLinks"
import NavabarIcons from "./NavabarIcons"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }
  toggleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }

  render() {
    return (
      <NavWrapper>
        <NavbarHeader toggleNavbar={this.toggleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavabarIcons />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: ${styles.newColors.navBack};
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    height: 70px;
    z-index: 3;
  }
`
