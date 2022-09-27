import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LanguageSwitcher from '../components/language-switcher';

const pageTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div
        css={css`
          background: white;
          padding: 3rem;
          position: relative;
          box-shadow: 0 14px 18px 10px #57060e;
          text-align: left;

          @media (min-width: 800px) {
            margin-left: 1rem;
            margin-right: 1rem;
          }

          &::after {
            content: '';
            border: 1px solid #ddca4d;
            position: absolute;
            top: 1.2rem;
            right: 0.8rem;
            bottom: 1.2rem;
            left: 0.8rem;
            z-index: 10;
          }

          &::before {
            content: '';
            border: 2px solid #ddca4d;
            position: absolute;
            top: 1rem;
            right: 1rem;
            bottom: 1rem;
            left: 1rem;
            z-index: 10;
          }

          div {
            position: relative;
            z-index: 20;
          }

          .well {
            background: #ddca4d;
            border-radius: 4px;
            padding: 1rem;
            margin-bottom: 1rem;
          }

          figure img {
            max-width: 400px;
            width: 100%;
            margin-bottom: 0;
          }
        `}
      >
        <h1>
          {post.frontmatter.title}{' '}
          {post.frontmatter.language && (
            <small>({post.frontmatter.language})</small>
          )}
        </h1>
        <LanguageSwitcher currentLanguage={post.frontmatter.language} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        language
      }
    }
  }
`;

export default pageTemplate;

export const Head = () => <SEO />;
