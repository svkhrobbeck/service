import { Contact, Faq, Header, Hero, Services } from "./";
import Features from "./features";

const App = () => {
  return (
    <>
      <h1 className="visually-hidden">Akkaunt Xizmatlari</h1>
      <div className="header-hero-wrapper">
        <Header />
        <Hero />
      </div>
      <Features />
      <Services />
      <Contact />
      <Faq />
      <footer className="footer">© 2023, WEB Service- tempservice@gmail.com</footer>
    </>
  );
};

export default App;
