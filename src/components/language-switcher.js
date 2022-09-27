import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Languages = [
  { language: 'English', url: 'srd' },
  { language: 'French', url: 'srd-french' },
];

const LanguageSwitcher = ({ currentLanguage }) => (
  <div
    css={css`
      margin-top: -1rem;
      font-size: 0.8rem;
      margin-bottom: 2rem;
      display: ${currentLanguage ? 'block' : 'none'};
    `}
  >
    Translations: {console.log(Languages)}
    {Languages.filter(
      (translation) => translation.language !== currentLanguage
    ).map((translation) => (
      <Link to={`/${translation.url}`} key={translation.url}>
        {`${translation.language}`}
        {console.log(translation)}
      </Link>
    ))}
  </div>
);

LanguageSwitcher.propTypes = {
  currentLanguage: PropTypes.string,
};

export default LanguageSwitcher;
