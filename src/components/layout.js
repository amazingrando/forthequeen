import React from "react"
import { css } from "@emotion/core"
import Header from "./header"
import Footer from "./footer"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 1000px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
      text-align: center;
    `}
  >
    <Header />
    {children}
    <Footer />
  </div>
)
