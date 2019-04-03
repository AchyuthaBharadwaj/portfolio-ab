import React, { Component } from "react"
import styled from "styled-components"
import gatsby from "../../images/gatsby-icon.png"
import { styles } from "../../utils"

export default class Skills extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <i className="devicon-html5-plain colored" />,
        hover: "html5",
      },
      {
        id: 2,
        icon: <i className="devicon-css3-plain colored" />,
        hover: "css3",
      },
      {
        id: 3,
        icon: (
          <i
            className="devicon-react-original colored"
            style={{ color: "black" }}
          />
        ),
        hover: "react",
      },
      {
        id: 4,
        icon: (
          <img
            src={gatsby}
            alt="gatsby"
            style={{ width: "35px", height: "35px" }}
          />
        ),
        hover: "gatsby",
      },
      {
        id: 5,
        icon: <i className="devicon-csharp-plain colored" />,
        hover: "c#",
      },
      {
        id: 6,
        icon: <i className="devicon-dot-net-plain colored" />,
        hover: ".net",
      },
      {
        id: 7,
        icon: (
          <i
            className="devicon-javascript-plain colored"
            style={{ color: "black" }}
          />
        ),
        hover: "javascript",
      },
      {
        id: 8,
        icon: <i className="devicon-bootstrap-plain colored" />,
        hover: "bootstrap",
      },
      {
        id: 9,
        icon: (
          <i
            className="devicon-python-plain colored"
            style={{ color: "black" }}
          />
        ),
        hover: "python",
      },
      {
        id: 10,
        icon: <i className="devicon-java-plain colored" />,
        hover: "java",
      },
      {
        id: 11,
        icon: <i className="devicon-jquery-plain colored" />,
        hover: "jquery",
      },
      {
        id: 12,
        icon: <i className="devicon-sass-original colored" />,
        hover: "sass",
      },
      {
        id: 13,
        icon: <i className="devicon-linux-plain colored" />,
        hover: "linux",
      },
      {
        id: 14,
        icon: <i className="devicon-pycharm-plain colored" />,
        hover: "pycharm",
      },
      {
        id: 15,
        icon: <i className="devicon-nodejs-plain colored" />,
        hover: "nodejs",
      },
      {
        id: 16,
        icon: <i className="devicon-bitbucket-plain colored" />,
        hover: "bitbucket",
      },
      {
        id: 17,
        icon: <i className="devicon-c-plain colored" />,
        hover: "c",
      },
      {
        id: 18,
        icon: <i className="devicon-chrome-plain colored" />,
        hover: "chrome",
      },
      {
        id: 19,
        icon: <i className="devicon-confluence-plain colored" />,
        hover: "confluence",
      },
      {
        id: 20,
        icon: <i className="devicon-github-plain colored" />,
        hover: "github",
      },
      {
        id: 21,
        icon: <i className="devicon-google-plain colored" />,
        hover: "google",
      },
      {
        id: 22,
        icon: <i className="devicon-cplusplus-plain colored" />,
        hover: "c++",
      },
      {
        id: 23,
        icon: <i className="devicon-facebook-plain colored" />,
        hover: "facebook",
      },
      {
        id: 24,
        icon: <i className="devicon-firefox-plain colored" />,
        hover: "firefox",
      },
      {
        id: 25,
        icon: <i className="devicon-git-plain colored" />,
        hover: "git",
      },
      {
        id: 26,
        icon: <i className="devicon-gitlab-plain colored" />,
        hover: "gitlab",
      },
      /*       {
        id: 27,
        icon: <i className="devicon-slack-plain colored" />,
        hover: "slack",
      }, */
      {
        id: 28,
        icon: <i className="devicon-sourcetree-plain colored" />,
        hover: "sourcetree",
      },
      {
        id: 29,
        icon: <i className="devicon-twitter-plain colored" />,
        hover: "twitter",
      },
      {
        id: 30,
        icon: <i className="devicon-ubuntu-plain colored" />,
        hover: "ubuntu",
      },
      {
        id: 31,
        icon: <i className="devicon-visualstudio-plain colored" />,
        hover: "visualstudio",
      },
      {
        id: 32,
        icon: <i className="devicon-windows8-plain colored" />,
        hover: "windows8",
      },
      {
        id: 33,
        icon: <i className="devicon-android-plain colored" />,
        hover: "android",
      },
      {
        id: 34,
        icon: <i className="devicon-angularjs-plain colored" />,
        hover: "android",
      },
      {
        id: 35,
        icon: <i className="devicon-atom-plain colored" />,
        hover: "atom",
      },
      {
        id: 36,
        icon: <i className="devicon-ie10-plain colored" />,
        hover: "ie10",
      },
      {
        id: 37,
        icon: <i className="devicon-intellij-plain colored" />,
        hover: "intellij",
      },
      {
        id: 38,
        icon: <i className="devicon-jetbrains-plain colored" />,
        hover: "jetbrains",
      },
      {
        id: 39,
        icon: <i className="devicon-php-plain colored" />,
        hover: "php",
      },
      {
        id: 40,
        icon: <i className="devicon-safari-plain colored" />,
        hover: "safari",
      },
      {
        id: 41,
        icon: <i className="devicon-apple-plain colored" />,
        hover: "apple",
      },
      {
        id: 42,
        icon: <i className="devicon-gimp-plain colored" />,
        hover: "gimp",
      },
      {
        id: 43,
        icon: <i className="devicon-photoshop-plain colored" />,
        hover: "photoshop",
      },
    ],
  }
  render() {
    return (
      <SkillsWrapper
        gridCols={this.props.gridCols}
        className={this.props.className}
      >
        {this.state.icons.map(item => {
          return (
            <li className="tooltip skill" key={item.id}>
              {item.icon}
              <span className="tooltiptext">{item.hover}</span>
            </li>
          )
        })}
      </SkillsWrapper>
    )
  }
}

const SkillsWrapper = styled.ul`
  list-style: none;
  padding-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(${props => props.gridCols}, 50px);
  grid-gap: 0.8rem;

  .skill {
    font-size: 2rem;
    padding-top: 0.4rem;
    border-radius: 0.6rem;
    background: ${styles.newColors.skillback};
  }

  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
    .tooltiptext {
      visibility: hidden;
      width: 100px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
      position: absolute;
      top: -25px;
      left: -20px;
      z-index: 1;
      font-size: 0.7rem;
      text-transform: uppercase;
    }
    &:hover {
      box-shadow: 0 0 20px #fff;
      cursor: pointer;
      transform: scale(1.1);
      ${styles.transObject({ time: "0.1s" })};
      .tooltiptext {
        visibility: visible;
      }
    }
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(${props => props.gridCols}, 60px);
    grid-gap: 1rem;
    .skill {
      font-size: 2.5rem;
      padding-top: 0.5rem;
    }
  }
`
