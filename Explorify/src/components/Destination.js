import "./DestinationStyles.css";
import sant1 from "../assets/sant1.jpg";
import sant2 from "../assets/sant2.jpg";
import kyoto1 from "../assets/kyoto1.jpg";
import kyoto2 from "../assets/kyoto2.jpg";
import petra1 from "../assets/petra1.jpg";
import petra2 from "../assets/petra2.jpg";

import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        Discover your next adventure among the most sought-after destinations,
        handpicked for your exploration pleasure.
      </p>

      <DestinationData
        className="first-des"
        heading="The Gem of the Aegean - Santorini, Greece "
        text="Santorini, Greece, known for its stunning sunsets and breathtaking views, boasts white-washed buildings, perched precariously on cliffs overlooking the azure Aegean Sea. Famous for its iconic blue-domed churches and crystal-clear waters, this Cycladic island attracts tourists worldwide. Exploring Santorini's ancient ruins, like Akrotiri's Minoan site, offers a glimpse into its rich history. Santorini's delectable cuisine includes fresh seafood and local specialties, making it a culinary delight. Vibrant nightlife and welcoming locals create an unforgettable experience on this captivating Greek island."
        img1={sant1}
        img2={sant2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="A Timeless Cultural Gem - Kyoto, Japan"
        text="Kyoto, Japan, stands as a timeless cultural gem, preserving the traditions and heritage of ancient Japan. With its historic temples, stunning gardens, and traditional tea houses, Kyoto offers a glimpse into the country's rich history. The iconic Fushimi Inari Shrine's thousands of vermilion torii gates create a mesmerizing pathway, while the serene Arashiyama Bamboo Grove immerses visitors in natural beauty. Kyoto's kaiseki cuisine, a culinary art form, showcases exquisite flavors and presentation. Experiencing a tea ceremony or donning a kimono adds to the cultural immersion. This city is a must-visit for those seeking a taste of Japan's rich past and its enduring traditions."
        img1={kyoto1}
        img2={kyoto2}
      />
      <DestinationData
        className="first-des"
        heading=" A Timeless Marvel in the Heart of Jordan - Petra, Jordan"
        text="Hidden amidst the vast desert landscape of Jordan, the ancient city of Petra stands as a testament to human ingenuity and artistry. Carved into rose-red cliffs over 2,000 years ago, this UNESCO World Heritage site is a wonder to behold. The narrow, winding Siq canyon leads you to the iconic Treasury, its intricate façade an architectural masterpiece. Beyond, a labyrinth of tombs, temples, and dwellings beckons explorers to unravel the mysteries of this lost city. As you traverse the stunning Al-Khazneh, hike up to the Monastery, or simply wander through the captivating landscapes, Petra's history comes alive, offering a journey through time like no other. It's a place where the echoes of civilizations past resonate in every carved stone, making Petra an unforgettable destination for adventurers and history enthusiasts alike."
        img1={petra1}
        img2={petra2}
      />
    </div>
  );
};

export default Destination;
