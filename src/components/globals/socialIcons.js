import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPaypal,
} from "react-icons/fa"

export default class SocialIcons extends Component {
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
        path: "https://twitter.com/achyutha1729",
      },
      {
        id: 3,
        icon: <FaFacebook className="icon" />,
        path: "https://www.facebook.com/achyutha.bharadwaj.7",
      },
      {
        id: 4,
        icon: <FaInstagram className="icon" />,
        path: "https://www.instagram.com/achyuthabharadwaj/",
      },
      {
        id: 5,
        icon: <FaPaypal className="icon" />,
        path: "https://paypal.me/achyuthabharadwaj",
      },
    ],
  }
  render() {
    return (
      <SocialIconsWrapper className={this.props.className}>
        {this.state.icons.map(item => {
          return (
            <div className="iconWrapper" key={item.id}>
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
            </div>
          )
        })}
      </SocialIconsWrapper>
    )
  }
}

const SocialIconsWrapper = styled.div`
  height: 50px !important;
  width: 300px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
  margin: 0 auto;
  svg {
    margin-left: 3px;
  }
  .icon {
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    ${styles.transObject({ time: "0.3s" })};

    &:hover {
      color: ${styles.newColors.linkColor};
      transform: scale(1.2);
    }
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`
