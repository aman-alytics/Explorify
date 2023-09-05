import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/trip1.jpg";
import Trip2 from "../assets/trip2.jpg";
import Trip3 from "../assets/trip3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>Stay updated with our latest journeys and plan your own expedition.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Vatican City"
          text="Vatican City, the world's smallest independent state, nestled within the heart of Rome, is a spiritual and historical marvel. Home to St. Peter's Basilica, the Vatican Museums, and the Sistine Chapel adorned with Michelangelo's masterpieces, this enclave is the epicenter of the Roman Catholic Church. Its rich history, religious significance, and awe-inspiring art make it a must-visit destination for pilgrims and art enthusiasts alike."
        />
        <TripData
          image={Trip2}
          heading="Trip in Dubai, UAE"
          text="Dubai, a gleaming jewel of the United Arab Emirates, dazzles with its futuristic skyline, luxurious lifestyle, and a seamless blend of tradition and modernity. Home to iconic landmarks like the Burj Khalifa and Palm Jumeirah, this cosmopolitan city offers visitors a tapestry of experiences, from high-end shopping in colossal malls to exhilarating desert safaris. Dubai's allure lies in its ambition and opulence, making it a captivating destination for travelers seeking both adventure and extravagance."
        />
        <TripData
          image={Trip3}
          heading="Trip in Sydney, Australia"
          text="
          Sydney, Australia's largest city, captivates visitors with its iconic Sydney Opera House and the grand Sydney Harbour Bridge, which frame the world-famous harbor. With its stunning coastal beaches, including Bondi and Manly, and a vibrant arts scene, Sydney seamlessly blends natural beauty with urban excitement, making it a must-visit destination for travelers seeking a blend of culture, adventure, and breathtaking scenery."
        />
      </div>
    </div>
  );
}

export default Trip;
