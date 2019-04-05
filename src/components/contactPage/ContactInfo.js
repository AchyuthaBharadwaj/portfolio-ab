import React, { Component } from "react"
import styled from "styled-components"
import { Section } from "../../utils"
import Right from "./Right"
import Left from "./Left"

export default class ContactInfo extends Component {
  render() {
    return (
      <ContactInfoWrapper>
        <Left />
        <Right />
      </ContactInfoWrapper>
    )
  }
}

const ContactInfoWrapper = styled(Section)``
