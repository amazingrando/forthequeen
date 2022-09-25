import React from "react"
import { css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"
import backgroundPattern from "../images/background-pattern.jpg"

const Layout = ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 1000px;
      background: url(${backgroundPattern});
    `}
  >
    <SEO />
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout;