import { useState } from "react";
import './App.css';

const travelDB = {
  wildlife: [
    { place: "Ranthambore", rating: "4.5 / 5" },
    { place: "Junagadh", rating: "4.2 / 5" },
    { place: "Sundarban", rating: "4 / 5" },
    { place: "Bharatpur", rating: "4.3 / 5" },
    { place: "Tadoba", rating: "4 / 5" }
  ],
  religious: [
    { place: "Ayodhya", rating: "5 / 5" },
    { place: "Puri", rating: "5 / 5" },
    { place: "Gaya", rating: "4.5 / 5" },
    { place: "Amritsar", rating: "4.8 / 5" },
    { place: "Hampi", rating: "4.3 / 5" }
  ],
  cultural: [
    { place: "Madurai", rating: "4.7 / 5" },
    { place: "Varanasi", rating: "4.9 / 5" },
    { place: "Jaipur", rating: "5 / 5" },
    { place: "Ladakh", rating: "4.5 / 5" },
    { place: "Pune", rating: "4.3 / 5" }
  ]
};

export default function App() {
  const [genres, setGenres] = useState(travelDB.wildlife);

  function travelChangeHandler(category) {
    setGenres(category);
    console.log(category);
    console.log(genres);
    console.log(Object.keys(genres[0]));
  }

  return (
    <div className="App">
      <header>
        <h2> 🏖️ Travel Recommendation </h2>
        <span className="header-span">
          Checkout these favorite tourist places. Select a genre to get started
        </span>
      </header>

      <section style={{ margin: "2rem" }}>
        <span
          onClick={() => {
            travelChangeHandler(travelDB.wildlife);
          }}
          className="span"
        >
          wildlife
        </span>
        <span
          onClick={() => {
            travelChangeHandler(travelDB.religious);
          }}
          className="span"
        >
          religious
        </span>
        <span
          onClick={() => {
            travelChangeHandler(travelDB.cultural);
          }}
          className="span"
        >
          cultural
        </span>
        <hr />
        <div className="container">
          {genres.map((genre) => {
            return (
              <div className="place-detail" key={Math.random()}>
                <span style={{ fontSize: "1.1rem" }}>{genre.place}</span>
                <br />
                <span style={{ textAlign: "left", fontSize: "0.8rem" }}>
                  {genre.rating}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

