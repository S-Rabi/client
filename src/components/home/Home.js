import Hero from "../../components/header/Hero";
import Navbar from "../../components/header/Navbar";
import CardComponent from "../../components/main/Card";
import Menu from "../../components/main/Menu";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <CardComponent />
      <Footer />
    </div>
  );
};

export default Home;
