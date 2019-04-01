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

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Navbar />
    <main>{children}</main>
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const LayoutWrapper = styled.div`
  color: ${styles.newColors.navFore};
  overflow-x: hidden;
`

export default Layout
