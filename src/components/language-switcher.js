import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Languages = [
  { language: "English", url: "srd" },
  { language: "French", url: "srd-french" },
]

class LanguageSwitcher extends React.Component {
  static propTypes = {
    currentLanguage: PropTypes.string,
  }

  render() {
    return (
      <div
        css={css`
          margin-top: -1rem;
          font-size: 0.8rem;
          margin-bottom: 2rem;
        `}
      >
        Translations:{" "}
        {Languages.filter(
          translation => translation.language !== this.props.currentLanguage
        ).map(translation => (
          <Link to={`/${translation.url}`} key={translation.url}>{`${
            translation.language
          }`}</Link>
        ))}
      </div>
    )
  }
}

export default LanguageSwitcher
