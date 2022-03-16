import React from "react";
import "../portfolio/Portfolio.styles.css";
import IMG1 from "../../assets/crwn.png";
import scoreboard from "../../assets/scoreboard.png";
import mem from "../../assets/mem.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={IMG1} alt="crwn site" />
          <h3>Crwn Clothing</h3>
          <a
            href="https://github.com/safisiddiqui/crwn-clothing"
            className="btn btn-primary"
          >
            Check it Out
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={scoreboard} alt="scoreboard" />
          <h3>Scoreboard Web-app</h3>
          <a
            href="https://github.com/safisiddiqui/scoreboard-app"
            className="btn btn-primary"
          >
            Check it Out
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={mem} alt="crwn site" />
          <h3>Memory Game Web-app</h3>
          <a href="https://github.com/safisiddiqui/memory-game" className="btn btn-primary">
            Check it Out
          </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
