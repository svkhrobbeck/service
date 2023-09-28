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
      <main className="main-content">
        <Features />
        <Services />
        <Faq />
        <Contact />
      </main>
      <footer className="footer">
        ©2023 ВEБ Сервис.
        <br />
        suhrobbek_soatov@mail.ru
      </footer>
    </>
  );
};

export default App;
