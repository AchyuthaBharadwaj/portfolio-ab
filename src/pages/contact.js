import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../utils"
import Bars from "../components/globals/Bars"
import ContactInfo from "../components/contactPage/ContactInfo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <Bars />
    <Banner title="contact me" subtitle="so let's talk?" />
    <ContactInfo />
  </Layout>
)

export default ContactPage
