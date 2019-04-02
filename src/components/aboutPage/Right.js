import React, { Component } from "react"
import { Section, styles } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"

export default class Right extends Component {
  render() {
    return (
      <RightSectionWrapper className={this.props.className}>
        <RightWrapper>
          <h1 className="title first">I am Achyutha, nice to meet you.</h1>
          <p>
            My full name is <b>Achyutha Sreenivasa Bharadwaj.</b> I was born and
            raised in a small city in <b>South India</b> called <b>Shimoga</b>.
            I leave there with 18 years to venture in <b>Mysore, India</b> where
            I did my Undergraduate degree in Computer Science.
          </p>
          <p>
            After graduating with flying colors, I got into my first
            Professional career at <b>VMware, Bangalore, India</b>, where I
            worked for 3 years as a <b>Full-stack web developer. </b>
            Currently, I am pursuing my{" "}
            <b>Masters degree in Computer Science</b> at
            <b> ASU.</b>
          </p>
          <p>
            I am a professional Full-stack Web Developer, a Vegetarian, and a
            serious gamer.
          </p>
          <h1 className="title">Professional History</h1>
          <p>
            I started to play with codes in mid 2010 and work professionally in
            a web development and deployment firm in the year 2014.
          </p>
          <p>
            During 2010 - 2014 I completed my undergraduate degree in Computer
            Science from Sri Jayachamarajendra College of Engineering, Mysore.
            Since then, I have always been working with web developement,
            design, Front End and UX design.
          </p>
          <p>
            I have 3 years of professional experience developing and designing
            web applications, which accumulated my skills of Front-end and Ux
            Design.
          </p>
          <h1 className="title">What am I doing now?</h1>
          <p>
            I am currently in my final semester of my Masters degree. In my free
            time In experiment with new technologies or design some websites.
          </p>
          <h1 className="title">About this site</h1>
          <p>
            This project has been rewritten several times. I use it to do my
            crazy experiments, usually when I'm studying a new technology.
            Inspired by the design of Fernando Moreira.
          </p>
          <h1 className="title">Contact Me?</h1>
          <p>
            If you want random and regular updates on what I'm doing in life,
            you can ...
          </p>
          <p>
            Connect with me on Linkedin{" "}
            <a href="https://www.linkedin.com/in/achyutha-bharadwaj/">here</a>.
          </p>
          <p>Follow me on instagram @achyuthabharadwaj.</p>
          <p>
            But ... If you ask for more direct contact you can leave a message{" "}
            <Link to="/contact/">here</Link>.
          </p>
        </RightWrapper>
      </RightSectionWrapper>
    )
  }
}

const RightSectionWrapper = styled(Section)`
  width: 90%;

  @media (min-width: 1000px) {
    width: calc(100% - 1.5rem);
    margin: 0 auto 0 0;
    max-width: 1300px;
  }
`

const RightWrapper = styled.div`
  line-height: 2rem;
  margin-top: -1.5rem;
  padding: 1rem;
  border-radius: 0.6rem;
  font-weight: 300;
  background: ${styles.newColors.abotmecard};
  p {
    padding-bottom: 0.8rem;
  }
  h1 {
    padding: 1rem 0;
    font-size: 1.4rem;
  }
  .first {
    padding-top: 0;
  }

  b {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: ${styles.newColors.linkColor};
    border-bottom: 1px solid ${styles.newColors.linkColor};
  }

  @media (min-width: 1000px) {
    padding-left: 1.5rem;
    margin-top: 0rem;
  }
`
