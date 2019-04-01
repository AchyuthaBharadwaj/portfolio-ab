import React, { Component } from "react"
import styled from "styled-components"
import { Section } from "../utils"

export default class Banner extends Component {
  render() {
    return (
      <BannerWrapper>
        <h1 className="title">{this.props.title}</h1>
        <h3 className="subtitle">{this.props.subtitle}</h3>
      </BannerWrapper>
    )
  }
}

Banner.defaultProps = {
  title: "Title",
}

const BannerWrapper = styled(Section)`
  text-align: center;
  .title {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 300;
  }

  .subtitle {
    font-size: 1.2rem;
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1000px) {
    .title {
      font-size: 3rem;
    }

    .subtitle {
      font-size: 1.7rem;
    }
  }
`
