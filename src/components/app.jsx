import { Header, Hero } from "./";
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
    </>
  );
};

export default App;
