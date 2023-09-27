import { Header, Hero } from "./";
import Contact from "./contact";
import Services from "./services";

const App = () => {
  return (
    <>
      <h1 className="visually-hidden">Akkaunt Xizmatlari</h1>
      <div className="header-hero-wrapper">
        <Header />
        <Hero />
      </div>
      <Services />
      <Contact />
    </>
  );
};

export default App;
