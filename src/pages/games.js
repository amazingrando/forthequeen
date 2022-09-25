import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Game from "../components/game"

const GamesPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (!!games) {
      fetch(
        "https://opensheet.elk.sh/1bkubC3K04PKg3OH0dQTf8ZRcMcZpmAQGwwiHxFgmgug/Form-Responses-1"
      )
        .then((res) => res.json())
        .then((data) => {
          setGames(data);
        });
    }
  }, [games]) 
  
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
          {games && games.filter(game => game['Do not add to site'] !== "Y").map(game => (
          <Game
              title={game['Title of your game']}
              author={game['Author']}
              description={game['Description of the game.']}
              link={game['Link to where people can find the game']}
              status={game['Game status']}
              key={game['Title of your game'] + game['Author']}
          />))}
            

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

export const Head = () => (
  <SEO/>
)

export default GamesPage;