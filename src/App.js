import { useState } from "react";
import './App.css';

const travelDB = {
  wildlife: [
    { place: "Ranthambore", rating: "4.5 / 5",
    description:"Situated in the vicinity of the Aravali hills and Vindhya plateau, the Ranthambore forest spreads over an area of 1334 sq km with having the 392 sq km of the area as the national park. Highly revered for the natural habitat to the significant number of Royal Bengal tigers, the Ranthambore tiger reserve is very popular among the wildlife lovers." },

    { place: "Junagadh", rating: "4.2 / 5",description:"Junagarh is famous for Gir Forest National Park, a wildlife sanctuary in Gujarat, western India. It was established to protect Asiatic lions, who frequent the fenced-off Devalia Safari Park, along with leopards and antelopes. Gir Jungle Trail, outside the fenced area, traverses deciduous forest and is home to wildlife including vultures and pythons. " },

    { place: "Sundarban", rating: "4 / 5",description:"Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal.It is known for the Royal Bengal Tiger, Ganges and Irawadi dolphins, estuarine crocodiles and the critically endangered endemic river terrapin (Batagur baska). It is the only mangrove habitat in the world for Panthera tigris tigris species. " },

    { place: "Bharatpur", rating: "4.3 / 5",description:"Formerly known as the Bharatpur Bird Sanctuary, the Keoladeo National Park is recognised as one of the world's most important bird breeding and feeding grounds.Situated in Rajasthan, India" },
    { place: "Tadoba", rating: "4 / 5",description:"The Tadoba Andhari Tiger Reserve is a wildlife sanctuary in Chandrapur district of Maharashtra state in India. It is Maharashtra's oldest and largest national park. Created in 1955, the reserve includes the Tadoba National Park and the Andhari Wildlife Sanctuary.Situated in Chandrapur, Maharashtra" }
  ],
  religious: [
    { place: "Ayodhya", rating: "5 / 5",description:"Birthplace of Lord Ram.River Saryu flows through it.Great place for spiritual nourishment." },
    { place: "Puri", rating: "5 / 5",description:"Abode of Lord Jagannath,Baldeva nad Subhadra.Famous worldwide for its grand temple and annual Rath yatra.Visited by millions every year" },
    { place: "Gaya", rating: "4.5 / 5",description:"Gaya is famous as place for offering last rite to ancestors,Mahabodhi temple, buddhist monastaries and Vishnupad temple.Well connncted to major cities and town." },
    { place: "Amritsar", rating: "4.8 / 5",description:"Sikh pilgrimage site famous for Harmandir Sahib.Bibekar Sahib, Jubbi Tree, Harmandir Sahib, and Guru ka Mahal are also a few more religious attractions to the unending list of religious sites in Amritsar." },
    { place: "Hampi", rating: "4.3 / 5",description:"Hampi is also an important pilgrimage center for both the Hindus and the Jains. It is believed that it was the place known as 'Kishkindha' (stated in Ramayana), where Lord Hanuman was born. Situated on the banks of Tungabhadra River, Hampi houses the renowned Virupaksha and Vitthala Temples of India" }
  ],
  cultural: [
    { place: "Madurai", rating: "4.7 / 5",description:"Madurai has a number of historical monuments, with the Meenakshi Temple and the Thirumalai Nayak Palace being the most prominent. Madurai is an important industrial and educational hub in South Tamil Nadu. The city is home to various automobile, rubber, chemical and granite manufacturing industries." },
    { place: "Varanasi", rating: "4.9 / 5",description:"Varanasi is one of the oldest cities in the world, which makes it rich with cultural heritage. The city is home to ghats, temples, museums, and many Puranic places.Ancient center for vedic learnings and Sanskrit scholars." },
    { place: "Jaipur", rating: "5 / 5",description:"The bustling bazaars of Jaipur, famous for Rajasthan jewellery, fabric and shoes, possess a timeless quality and are a treasure-trove for the shoppers. Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned city of India.Top places to visit in Jaipur such as the magnificent Amber Fort, Hawa Mahal, Jaigarh Fort, and Hawa Mahal" },
    { place: "Ladakh", rating: "4.5 / 5",description:"Ladakh, sometimes referred to as Little Tibet, is popular with tourists because it is home to one of the purest remaining examples of Tibetan Buddhist culture. Visitors come to see a preindustrial culture, tour the Buddhist monasteries, and take in the dramatic mountain vistas" },
    { place: "Pune", rating: "4.3 / 5",description:"Pune boasts several historical monuments and museums. There is the Aga Khan Palace, Pataleshwar, the Chaturshringi Temple, the Sinhagad Fort, and the famous Shaniwar Wada are some of the historical and architectural gems worth visiting.Also famous for Shivaji Maharaj's maratha kingdom capital." }
  ]
};

export default function App() {
  const [genres, setGenres] = useState(travelDB.wildlife);

  function travelChangeHandler(category) {
    setGenres(category);
    // console.log(category);
    // console.log(genres);
    // console.log(Object.keys(genres[0]));
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
                <p>{genre.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

