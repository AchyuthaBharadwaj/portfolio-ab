import React from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"
import { FaHeart } from "react-icons/fa"

export default function Footer({ noFooter }) {
  const footerVisible = noFooter == null ? true : noFooter
  return (
    footerVisible && (
      <FooterWrapper>
        <Section>
          <h4>
            made with{" "}
            <span>
              <FaHeart className="icon" />
            </span>{" "}
            by Achyutha Bharadwaj. &copy; 2019.
          </h4>
        </Section>
      </FooterWrapper>
    )
  )
}

const FooterWrapper = styled.div`
  width: 100%;
  background: ${styles.newColors.navBack};

  h4 {
    font-weight: 300;
    text-transform: capitalize;
    text-align: center;
    margin: 0 auto;
  }
  .icon {
    color: red;
  }
`
