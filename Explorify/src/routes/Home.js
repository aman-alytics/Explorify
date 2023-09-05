import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HeroImg from "../assets/mapgirl.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="Unlock the wonders of the world with Explorify"
        text="Where curiosity knows no bounds and discovery is just a click away."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
