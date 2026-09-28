/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Game from '../components/game';

const filters = ['Released', 'Playtesting', 'In Development', 'All'];

const GamesPage = ({ data }) => {
  const gameList = data.allGoogleSheet.nodes;
  const [activeFilter, setActiveFilter] = useState('All');
  const [gameDisplayList, setGameDisplayList] = useState(gameList);

  const buttonStyles = (isActive) => css`
    padding: 0.3rem 1rem;
    background: ${isActive ? '#57060e' : '#ddca4d'};
    color: ${isActive ? '#fff' : '#202027'};
    border: 2px solid transparent;
    border-radius: 0.3rem;
    cursor: pointer;
    font: inherit;
    font-weight: ${isActive ? 700 : 400};

    &:hover {
      background: ${isActive ? '#6d0914' : '#ccba45'};
    }

    &:focus-visible {
      outline: 2px solid #57060e;
      outline-offset: 2px;
    }
  `;

  const handleClick = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setGameDisplayList(gameList);
    } else {
      setGameDisplayList(
        gameList.filter((game) => game.Game_status === filter),
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
          <div
            css={css`
              margin-bottom: 3rem;
            `}
          >
            <p
              css={css`
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                align-items: center;
                margin-bottom: 0.75rem;
              `}
            >
              <strong
                css={css`
                  margin-right: 0.5rem;
                `}
              >
                Filter by Status:
              </strong>
              <span
                role="group"
                aria-label="Filter by status"
                css={css`
                  display: flex;
                  flex-wrap: wrap;
                  gap: 0.5rem;
                `}
              >
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      type="button"
                      key={filter}
                      aria-pressed={isActive}
                      onClick={() => {
                        handleClick(filter);
                      }}
                      css={buttonStyles(isActive)}
                    >
                      {filter}
                    </button>
                  );
                })}
              </span>
            </p>
            <p
              css={css`
                margin: 0;
              `}
            >
              Now showing: <strong>{activeFilter}</strong>
            </p>
          </div>
          {console.log(gameDisplayList)}
          {gameDisplayList &&
            gameDisplayList
              .filter((game) => game.Do_not_add_to_site !== 'Y')
              .filter(
                (game) => game.Do_not_add_to_site !== 'Do not add to site',
              )
              .map((game) => (
                <Game
                  title={game.Title_of_your_game}
                  author={game.Author}
                  description={game.Description_of_the_game}
                  link={game.Link_to_where_people_can_find_the_game}
                  status={game.Game_status}
                  key={game.Title_of_your_game + Math.random() * 100000}
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

export const query = graphql`
  query {
    allGoogleSheet {
      nodes {
        Timestamp
        Do_not_add_to_site
        Title_of_your_game
        Description_of_the_game
        Link_to_where_people_can_find_the_game
        Author
        Game_status
        Email_Address
      }
    }
  }
`;

export default GamesPage;
