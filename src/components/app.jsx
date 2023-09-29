import { Contact, Faq, Header, Hero, Services } from "./";
import Features from "./features";

const App = () => {
  return (
    <>
      {/* h1 for seo */}
      <h1 className="sr-only">Akkaunt Xizmatlari</h1>

      {/* header hero wrapper */}
      <div className="min-h-[auto] tablet:min-h-[90vh] lg:min-h-screen bg-[url(./assets/images/header-hero-bg.png)] bg-no-repeat bg-cover bg-center flex flex-row md:flex-col flex-wrap md:flex-nowrap">
        <Header />
        <Hero />
      </div>

      {/* main components */}
      <main>
        <Features />
        <Services />
        <Faq />
        <Contact />
      </main>

      {/* footer */}
      <footer className="py-[32px] text-center leading-[1.35] text-[#fff]/[.7]">
        ©2023 ВEБ Сервис.
        <br />
        suhrobbek_soatov@mail.ru
      </footer>
    </>
  );
};

export default App;
