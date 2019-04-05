import React from "react"
import SocialIcons from "../globals/socialIcons"
import styled from "styled-components"
import { styles } from "../../utils"

export default function Left({ className }) {
  return (
    <LeftWrapper className={className}>
      <a className="email" href="mailto:achyuthabharadwaj1992@gmail.com">
        send an email to: achyuthabharadwaj1992@gmail.com
      </a>
      <p className="text">... or connect on any of my social networks!</p>
      <SocialIcons className="socialIcons" />
    </LeftWrapper>
  )
}

const LeftWrapper = styled.div`
  text-align: center;
  font-weight: 300;
  .socialIcons {
    margin: 0 auto;
  }
  .text {
    padding-bottom: 2rem;
    font-size: 1.2rem;
  }
  .email {
    width: 80%;
    height: 5rem;
    margin: 0 auto;
    padding: 1.3rem 1rem;
    max-width: 25rem;
    border-radius: 0.6rem;
    margin-bottom: 2rem;
    display: block;
    text-decoration: none;
    color: ${styles.colors.mainWhite};
    background: ${styles.newColors.abotmecard};
    box-shadow: 0 0 10px ${styles.newColors.navBack};

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px ${styles.newColors.linkColor};
      ${styles.transObject({ time: "0.3s" })}
    }
  }

  @media (min-width: 1000px) {
    margin-top: 2rem;
  }
`
