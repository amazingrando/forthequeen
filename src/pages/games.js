import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import gameList from '../data/gameList.json';
import Game from '../components/game';

const GamesPage = () => {
  const [gameDisplayList, setGameDisplayList] = useState(gameList);

  const buttonStyles = css`
    padding: 0.25rem 0.5rem;
    background: #ddca4d;
    border: none;
    padding: 0.3rem 1rem;
    text-decoration: none;
    border-radius: 0.3rem;

    &:hover {
      background: #ccba45;
    }
  `;

  const handleClick = (filter) => {
    if (filter === 'All') {
      setGameDisplayList(gameList);
    } else {
      setGameDisplayList(
        gameList.filter((game) => game['Game status'] === filter)
      );
    }
  };

  return (
    <Layout>
      <div
        css={css`
          background: white;
          padding: 3rem;
          position: relative;
          box-shadow: 0 14px 18px 10px #57060e;
          text-align: left;

          @media (min-width: 650px) {
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
            margin-bottom: 0;
          }
        `}
      >
        <div>
          <h1>Games</h1>
          <p>
            The following games are <em>Descended from the Queen</em>.
          </p>
          <p
            css={css`
              display: flex;
              gap: 0.5rem;
              align-items: center;
              margin-bottom: 3rem;
            `}
          >
            <strong
              css={css`
                margin-right: 0.5rem;
              `}
            >
              Filter by Status:
            </strong>
            <button
              type="button"
              onClick={() => {
                handleClick('Released');
              }}
              css={buttonStyles}
            >
              Released
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('Playtesting');
              }}
              css={buttonStyles}
            >
              Playtesting
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('In Development');
              }}
              css={buttonStyles}
            >
              In Development
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('All');
              }}
              css={buttonStyles}
            >
              All
            </button>
          </p>
          {gameDisplayList &&
            gameDisplayList
              .filter((game) => game['Do not add to site'] !== 'Y')
              .map((game) => (
                <Game
                  title={game['Title of your game']}
                  author={game.Author}
                  description={game['Description of the game.']}
                  link={game['Link to where people can find the game']}
                  status={game['Game status']}
                  key={game['Title of your game'] + Math.random() * 100000}
                />
              ))}
          <h2>How to Add Your Game to this List</h2>
          <p>
            <a href="https://forms.gle/GCFbNZDyLC6tmrRG7">Fill out our form</a>{' '}
            and after a review, we'll add it to the list.{' '}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default GamesPage;
