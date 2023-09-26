import { Header, Hero } from "./";
import Services from "./services";

const App = () => {
  return (
    <>
      <div className="header-hero-wrapper">
        <Header />
        <Hero />
      </div>
      <Services />
    </>
  );
};

export default App;
