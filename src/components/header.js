import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import logo from "../images/for-the-queen.svg"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faChessQueen } from "@fortawesome/pro-solid-svg-icons"

library.add(faHeart, faChessQueen)

export default () => {
  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        a {
          color: white;
          text-decoration: none;
          font-size: 1.5rem;
          transition: all 0.15s;

          &:hover {
            color: #ddca4d;
          }

          &[aria-current="page"] {
            color: #ddca4d;
          }
        }
      `}
    >
      <Link
        to={`/`}
        css={css`
          margin-right: auto;
        `}
      >
        <img
          src={logo}
          alt="For the Queen Logo"
          css={css`
            filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.9));
            max-width: 400px;
            width: 100%;
            min-height: 100px;
            margin-bottom: 0;
            transition: all 0.15s;
            transform: scale(1);

            &:hover {
              transform: scale(1.1);
            }
          `}
        />
      </Link>
      <Link
        to={`/`}
        css={css`
          margin-right: 2rem;
        `}
      >
        <FontAwesomeIcon icon="chess-queen" /> Licensing
      </Link>
      <Link to={`/srd`}>
        <FontAwesomeIcon icon="heart" /> SRD
      </Link>
    </header>
  )
}
