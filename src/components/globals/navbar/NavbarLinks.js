import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        <li>
          <Link to="/" className="nav-link home">
            home
          </Link>
        </li>
        <li>
          <Link to="/about/" className="nav-link about">
            about
          </Link>
        </li>
        <li>
          <Link to="/experience/" className="nav-link experience">
            experience
          </Link>
        </li>
        <li>
          <Link to="/projects/" className="nav-link projects">
            projects
          </Link>
        </li>
        <li>
          <Link to="/leetcode/" className="nav-link leetcode">
            LeetCode
          </Link>
        </li>
        <li>
          <Link to="/contact/" className="nav-link contact">
            contact
          </Link>
        </li>
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.newColors.navFore};
    font-weight: 400;
    text-transform: capitalize;
    text-align: center;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
    }
  }
  height: ${props => (props.open ? "182px" : "0px")};
  overflow: hidden;
  margin-block-start: 0em;
  margin-block-end: 0em;
  ${styles.transDefault};

  @media (min-width: 1000px) {
    height: auto;
    display: flex;
    margin: 5px auto 0 10px;
    transition: none;
    .nav-link {
      line-height: 3rem;
      &:hover {
        color: ${styles.colors.mainWhite};
        padding: 0.5rem 1rem 0.5rem 1rem;
      }
    }

    .home {
      border-bottom: 3px solid #f4a460;
    }
    .about {
      border-bottom: 3px solid #dd0031;
    }
    .experience {
      border-bottom: 3px solid #41b883;
    }
    .projects {
      border-bottom: 3px solid #61dafb;
    }
    .leetcode {
      border-bottom: 3px solid #f7df1e;
    }
    .contact {
      border-bottom: 3px solid #3399fe;
    }
  }
`
