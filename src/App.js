import "./styles.css";
import React, { useState } from "react";

const country = {
  France: [
    {
      place: "Château de Brissac",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/Gravure_de_Octave_de_Rochebrune_Ch%C3%A2teau_de_Brissac.jpg",
      description:
        "La Dame Verte, (Green Lady), who was apparently the illegitimate child of King Charles VII and was later murdered by her husband in the château in the 15th century after he caught her having an affair.  She is often seen in the tower room of the chapel, wearing her green dress, with gaping holes where her eyes and nose should be. When not startling guests by her appearance she can be heard moaning around the castle"
    },
    {
      place: "Mont Saint-Michel",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Mont-Saint-Michel_vu_du_ciel.jpg",
      description:
        "According to the stories, the Archangel Michael had to burn a hole in Saint Aubert’s skull before he was persuaded to start building it. Today, the ghost of Captain Louis d’Estouteville stands guard on the mount, overlooking the site of his victory against the dastardly English in 1434"
    }
  ],
  India: [
    {
      place: "Bhangarh Fort, Rajasthan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Haunted-bhangarh-fort-rajasthan.jpg",
      description:
        " A wizard called Singhia and a princess called Ratnavati who spurned his advances. Legend has it that the enchanted oil he hoped would make her love him turned into a boulder when she threw it away – and it crushed him. But not before he cursed the palace, condemning the inhabitants to death, without any hope of rebirth. Another story suggests a local ascetic cursed the fort because its shadow overpowered his property. And apparently, if anyone attempts to build a roof for the fort, it will collapse."
    },
    {
      place: "Taj Mahal Palace, Mumbai",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg",
      description:
        "One of the hotel’s architects, W. A. Chambers, threw himself from the fifth floor balcony. Apparently, he was distressed when he returned from a trip abroad to discover that the hotel's design had gone in a completely different direction in his absence. In a tragic twist of fate, his ghost is said to wander the halls and the Old Wing of the hotel.  "
    },
    {
      place: " Dow Hill, Kurseong, West Bengal",
      image:
        "https://web.archive.org/web/20160811200213im_/http://admin.maamatimanush.tv/feature/images//6830612954401.jpg",
      description:
        "The Victoria Boy’s High School and Dowhill Girl’s Boarding School in Kurseong, Darjeeling, are believed to be the residence of many spirits whose footsteps can be heard echoing through the hallways. There have been countless murdered bodies found in the wood surrounding the schools and several locals and tourists report being followed by a headless boy who then disappears into the woods."
    }
  ],
  UAE: [
    {
      place: "The Tunnel In Pan Emirates: Tunnel Of The Dark",
      image:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2018/09/tunnel.jpg",
      description:
        "Tunnels have always been a matter of fear and insecurity as the moment you enter them, there is darkness and the possibility of unknown happenings. But the fear doubles up when there are ghost stories associated with them. If you are looking for horror places in Dubai this tunnel is famous for spooky stories. Some people say that they have sensed appearances while passing through the tunnel. Will you dare to pass through it?"
    },
    {
      place: "Al Khail Gate: The Scary Apartment",
      image:
        "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/09/al-khail.jpg",
      description:
        "Being one of the real haunted places in Dubai, this apartment is infamous for paranormal activities that occurred in some rooms of the building and falls under the banner of top haunted places in Dubai. Some members who lived there reported that their belongings disappeared in a strange manner and found at other places later on. The owners of the building have put it down for maintenance, but the fact cannot be denied that three suicides had taken place in the building. You will get to know about the building easily from the locals on your Dubai trip."
    }
  ]
};

export default function App() {
  const image_query = "https://www.google.com/search?tbm=isch&q=";
  var countryList = Object.keys(country);
  const [currentCountry, setCountry] = useState("UAE");
  function countryDataHandler(countryName) {
    setCountry(countryName);
  }

  return (
    <div className="App">
      <h1> Haunted Places to Vist Before You Die</h1>
      <small>(Or more like you may die while visiting these places)</small>

      <div>
        {countryList.map((countryName) => (
          <button
            onClick={() => countryDataHandler(countryName)}
            style={{
              margin: "30px",
              padding: "1rem",
              fontFamily: "inherit",
              boxShadow: "2px 4px 4px #a9a9a9",
              borderRadius: "4px",
              backgroundColor: "transparent",
              color: "black",
              cursor: "pointer",
              fontStyle: "bold",
              mixBlendMode: "multiply"
            }}
          >
            <strong key={countryName}> {countryName}</strong>
          </button>
        ))}
      </div>

      {country[currentCountry].map((info) => (
        <article>
          <li key={info.place} style={{ margin: "50px", listStyle: "none" }}>
            <div style={{ margin: "10px", fontSize: "2rem" }}>{info.place}</div>
            <div className="desc-image">
              {" "}
              <img src={info.image} alt="" style={{ maxWidth: "350px" }} />
            </div>

            <div
              className="desc"
              style={{
                margin: "10px",
                justifyContent: "center",
                textAlign: "left",
                fontSize: "20px"
              }}
            >
              {info.description}
            </div>
          </li>
        </article>
      ))}
    </div>
  );
}
