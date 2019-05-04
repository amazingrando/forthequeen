import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"

class Game extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes,
    link: PropTypes.string,
    status: PropTypes.string,
  }

  render() {
    return (
      <div
        css={css`
          border-bottom: 3px double #ddca4d;
          margin-bottom: 3rem;
          padding-bottom: 1rem;
        `}
      >
        <h2
          css={css`
            margin: 0;
          `}
        >
          {this.props.title}
        </h2>

        {this.props.author && (
          <p>
            <em>By {this.props.author}</em>
          </p>
        )}
        {this.props.status && <p>Status: {this.props.status}</p>}

        {this.props.description && <p>{this.props.description}</p>}

        {this.props.link && (
          <p>
            <a
              css={css`
                background: #ddca4d;
                padding: 0.3rem 1rem;
                text-decoration: none;
                border-radius: 500px;
                color: #202027;
                text-transform: uppercase;
                font-size: 0.8rem;
                letter-spacing: 1px;
                transition: all 0.15s;

                &:hover {
                  background: #ccba45;
                }
              `}
              href={this.props.link}
            >
              Learn More
            </a>
          </p>
        )}
      </div>
    )
  }
}

export default Game
