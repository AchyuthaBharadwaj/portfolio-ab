import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa"

export default class NavabarIcons extends Component {
  state = {
    icons: [
      {
        id: 0,
        icon: <FaGithub className="icon" />,
        path: "https://github.com/AchyuthaBharadwaj",
      },
      {
        id: 1,
        icon: <FaLinkedinIn className="icon" />,
        path: "https://www.linkedin.com/in/achyutha-bharadwaj/",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon" />,
        path: "https://www.twitter.com",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a href={item.path} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    color: #fff;
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};

    &:hover {
      color: ${styles.colors.mainYellow};
    }
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`
