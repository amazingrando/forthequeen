import React, { useState } from 'react';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Game from '../components/game';

const GamesPage = ({ data }) => {
  const gameData = data.allGoogleSpreadsheetGamesFormResponses1.edges;
  const [gameDisplayList, setGameDisplayList] = useState(gameData);
  const [activeFilter, setActiveFilter] = useState('');

  const buttonStyles = (text) => css`
    padding: 0.25rem 0.5rem;
    background: ${activeFilter === text ? '#890718' : '#ddca4d'};
    color: ${activeFilter === text ? '#fff' : '#202027'};
    border: none;
    padding: 0.3rem 1rem;
    text-decoration: none;
    border-radius: 0.3rem;

    &:hover {
      background: ${activeFilter === text ? '#740514' : '#ccba45'};
    }
  `;

  const handleClick = (filter) => {
    if (filter !== 'All') {
      setGameDisplayList(
        gameData.filter((game) => game.node.gameStatus === filter)
      );
      setActiveFilter(filter);
    } else {
      setGameDisplayList(gameData);
      setActiveFilter('');
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
              css={buttonStyles('Released')}
            >
              Released
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('Playtesting');
              }}
              css={buttonStyles('Playtesting')}
            >
              Playtesting
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('In Development');
              }}
              css={buttonStyles('In Development')}
            >
              In Development
            </button>
            <button
              type="button"
              onClick={() => {
                handleClick('All');
              }}
              css={buttonStyles('All')}
            >
              All
            </button>
          </p>
          {gameDisplayList &&
            gameDisplayList
              .filter((game) => game['Do not add to site'] !== 'Y')
              .map((game) => (
                <Game
                  title={game.node.titleOfYourGame}
                  author={game.node.author}
                  description={game.node.descriptionOfTheGame}
                  link={game.node.linkToWherePeopleCanFindTheGame}
                  status={game.node.gameStatus}
                  key={game.node.titleOfYourGame + Math.random() * 100000}
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

GamesPage.propTypes = {
  data: PropTypes.any,
};

export const query = graphql`
  query {
    allGoogleSpreadsheetGamesFormResponses1 {
      edges {
        node {
          author
          descriptionOfTheGame
          emailAddress
          gameStatus
          linkToWherePeopleCanFindTheGame
          titleOfYourGame
        }
      }
    }
  }
`;

export default GamesPage;
