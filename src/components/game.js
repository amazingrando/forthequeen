import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Game = ({ title, author, description, link, status }) => (
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
      {title}
    </h2>
    {author && (
      <p>
        <em>By {author}</em>
      </p>
    )}
    {status && (
      <p>
        <strong>Status:</strong> {status}
      </p>
    )}
    {description && <p>{description}</p>}
    {link && (
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
          href={link && !link.match(/^https?:\/\//) ? `https://${link}` : link}
        >
          Learn More
        </a>
      </p>
    )}
  </div>
);
Game.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string,
  link: PropTypes.string,
  status: PropTypes.string,
};

export default Game;
