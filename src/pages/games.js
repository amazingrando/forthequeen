import React from "react"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import gameData from '../utils/data.json'
import Game from "../components/game"

export default () => {

  return (
    <Layout>
      <SEO />
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
            content: "";
            border: 1px solid #ddca4d;
            position: absolute;
            top: 1.2rem;
            right: 0.8rem;
            bottom: 1.2rem;
            left: 0.8rem;
            z-index: 10;
          }

          &::before {
            content: "";
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
          <p
            css={css`
              margin-bottom: 3rem;
            `}
          >
            The following games are <em>Descended from the Queen</em>.
          </p>
          {gameData.map(gameItem => (
            <Game
              title={gameItem['Title of your game']}
              author={gameItem['Author']}
              description={gameItem['Description of the game.']}
              link={gameItem['Link to where people can find the game']}
              status={gameItem['Game status']}
              key={gameItem['Title of your game'] + gameItem['Author']}
          />
          ))}

          <h2>How to Add Your Game to this List</h2>
          <p>
            <a href="https://forms.gle/GCFbNZDyLC6tmrRG7">Fill out our form</a>{" "}
            and after a review, we'll add it to the list.{" "}
          </p>
        </div>
      </div>
    </Layout>
  )
}
