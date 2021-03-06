import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { FaLinkedinIn, FaPaypal, FaGithub } from "react-icons/fa"

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
        icon: <FaPaypal className="icon" />,
        path: "https://paypal.me/achyuthabharadwaj",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
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
    ${styles.transObject({ time: "0.3s" })};

    &:hover {
      color: ${styles.newColors.linkColor};
      transform: scale(1.2);
    }
  }
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`
