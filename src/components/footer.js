import React from 'react';
import { css } from '@emotion/react';

const Footer = () => (
  <footer
    css={css`
      color: white;
      margin-top: 1.5rem;
      margin-bottom: 4rem;
      padding-left: 2rem;

      a {
        color: white;
        transition: all 0.15s;

        &:hover {
          color: #ddca4d;
        }
      }
    `}
  >
    For the Queen is published by{' '}
    <a href="https://darringtonpress.com/">Darrington Press</a>
  </footer>
);

export default Footer;
