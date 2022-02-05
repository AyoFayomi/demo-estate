import Hero from "../components/hero.js/hero";
import TopListing from "../components/topListing/topListing";
import Store from "../components/store/Store";
import Form from "../components/form/Form";
import Footer from "../components/footer/Footer";

const main = () => {
  return (
    <div>
      <Hero />
      <TopListing />
      <Store />
      <Form />
      <Footer />
    </div>
  );
};

export default main;
