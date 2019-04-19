import React from "react"
import { css } from "@emotion/core"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 1000px;
    `}
  >
    <Header />
    {children}
    <Footer />
  </div>
)
