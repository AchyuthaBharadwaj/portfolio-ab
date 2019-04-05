import React, { Component } from "react"
import styled from "styled-components"
import { Section } from "../../utils"
import Right from "./Right"
import Left from "./Left"

export default class ContactInfo extends Component {
  render() {
    return (
      <ContactInfoWrapper>
        <Left className="left" />
        <Right className="right" />
      </ContactInfoWrapper>
    )
  }
}

const ContactInfoWrapper = styled(Section)`
  .left {
    animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 400ms both;
  }
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    .right {
      animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 400ms both;
    }
    .left {
      animation: slide-up 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 800ms both;
    }
  }
`
