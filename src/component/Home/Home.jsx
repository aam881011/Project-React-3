import Header from "./Header/Header";
import Navigation from "./../Nav/Navigation";
import Services from "./Services/Services";
import Features from "./Features/Features";
import Started from "./Started/Started";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Services />
      <Features />
      <Started />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
