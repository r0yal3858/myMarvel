import React from "react";
import "./home.css";

import character from "../../assets/marvelCharacters.jpg";
import comics from "../../assets/marvelComics.jpg";
import events from "../../assets/marvelEvents.jpg";
import series from "../../assets/marvelSeries.jpg";

import videox from "../../video.mp4";
export const Home = () => {
  return (
    <>
      <div className="home__video">
        <video src={`${videox}#t=1.7,32`} autoPlay muted />
      </div>
      <div className="home__container">
        <div className="home__item">
          <div className="home__item--img">
            <a href="/characters">
              <img src={character} />
            </a>
          </div>
          <div className="home__item--details">
            <div className="home__item--title">
              <a href="/characters">Characters</a>
            </div>
            <div className="home__item--description">
              the women, men, organizations, alien species, deities, animals,
              non-corporeal entities, trans-dimensional manifestations, abstract
              personifications, and green amorphous blobs which occupy the
              Marvel Universe (and various alternate universes, timelines and
              altered realities therein).
            </div>
          </div>
        </div>
        <div className="home__item">
          <div className="home__item--img">
            <a href="/comics">
              {" "}
              <img src={comics} />
            </a>
          </div>
          <div className="home__item--details">
            <div className="home__item--title">
              <a href="/comics">Comics</a>
            </div>
          </div>
        </div>
        <div className="home__item">
          <div className="home__item--img">
            <a href="/events">
              <img src={events} />
            </a>
          </div>
          <div className="home__item--details">
            <div className="home__item--title">
              <a href="/events">Events</a>
            </div>
            <div className="home__item--description">
              big, universe-altering storylines.
            </div>
          </div>
        </div>
        <div className="home__item">
          <div className="home__item--img">
            <a href="/series">
              <img src={series} />
            </a>
          </div>
          <div className="home__item--details">
            <div className="home__item--title">
              <a href="/series">Series</a>
            </div>
            <div className="home__item--description">
              sequentially numbered (well, mostly sequentially numbered) groups
              comics with the same title
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
