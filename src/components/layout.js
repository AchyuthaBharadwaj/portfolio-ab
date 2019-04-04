/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "./globals/navbar"
import styled from "styled-components"
import { styles } from "../utils"
import Footer from "./globals/Footer"

const Layout = ({ children, noFooter }) => (
  <LayoutWrapper>
    <Navbar />
    <main className="mainContent">{children}</main>
    <Footer noFooter={noFooter} />
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutWrapper = styled.div`
  color: ${styles.newColors.navFore};
  overflow-x: hidden;
  .mainContent {
    min-height: calc(100vh - 155px);
  }
`

export default Layout
