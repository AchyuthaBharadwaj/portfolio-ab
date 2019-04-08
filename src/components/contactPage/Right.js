import React from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"

export default function Right({ className }) {
  return (
    <RightWrapper className={className}>
      <p className="mainText">
        Or fill in your details below and wait for me to contact you.
      </p>
      <div className="lineBreak" />
      <form
        className="form"
        action="/thanks/"
        method="POST"
        data-netlify="true"
        name="contact-form"
      >
        <p className="text" style={{ marginTop: "0" }}>
          Full name*
        </p>
        <input
          type="text"
          name="full-name"
          id="full-name"
          className="input"
          required
        />
        <p className="text">Your best email*</p>
        <input type="text" name="email" id="email" className="input" required />
        <p className="text">Your message*</p>
        <textarea name="message" id="message" className="textArea" required />
        <div data-netlify-recaptcha="true" />
        <div className="lineBreak" />
        <div className="submitWrapper">
          <p className="message">*All fields are mandatory</p>
          <input className="submit" type="submit" value="Ok, Send!" />{" "}
        </div>
      </form>
    </RightWrapper>
  )
}

const RightWrapper = styled(Section)`
  width: 90%;
  padding: 2rem;
  border-radius: 0.6rem;
  background: ${styles.newColors.abotmecard};
  margin-top: 2rem;
  font-size: 0.8rem;
  font-weight: 300;
  .lineBreak {
    margin: 1.4rem 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      to right,
      rgba(32, 104, 130, 0.6),
      rgb(0, 61, 76)
    );
  }
  .mainText {
    font-size: 1.1rem;
  }
  .form {
    .input,
    .textArea {
      width: 100%;
      margin-top: 0.6rem;
      height: 2.5rem;
      border-radius: 0.6rem;
      background: ${styles.colors.mainWhite};
      border-width: 0px;
      padding-left: 10px;
      color: ${styles.colors.mainBlack};
      font-weight: 500;
      opacity: 0.7;
      outline: none;
      &:focus {
        box-shadow: 0 0 20px ${styles.newColors.linkColor};
      }
    }

    .textArea {
      height: 5rem;
      padding: 0.6rem;
    }

    .text {
      margin-top: 1rem;
      text-transform: capitalize;
      padding-left: 0.5rem;
    }
    .submitWrapper {
      display: flex;
      justify-content: space-between;
      list-style: none;

      .message {
        color: ${styles.colors.mainYellow};
        transform: translateY(1rem);
      }

      .submit {
        padding: 1rem;
        border-radius: 0.6rem;
        outline: none;
        border: none;
        cursor: pointer;
        background: ${styles.newColors.buttonBack};
        box-shadow: 0 0 10px ${styles.newColors.navBack};
        color: ${styles.colors.mainWhite};
        &:hover {
          transform: scale(1.1);
          box-shadow: 0 0 10px ${styles.newColors.linkColor};
          ${styles.transObject({ time: "0.3s" })}
        }
      }
    }
  }

  @media (min-width: 768px) {
    width: 80%;
    font-size: 0.9rem;
    .message {
      transform: translateY(1.1rem);
    }
    .submit {
      font-size: 1rem;
    }
    .mainText {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1000px) {
    margin-top: 0;
    width: 100%;
  }
`
