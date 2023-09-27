import { useState } from "react";
import { Accordion } from ".";
import { frequentlyQuestions } from "../helpers/constants";

const Faq = () => {
  const [setselectedQuestion, setSetselectedQuestion] = useState("");

  return (
    <section className="faq" id="faq">
      <div className="container faq__container">
        <h2 className="faq__title">FAQ</h2>
        <div className="faq__accordions">
          {frequentlyQuestions.map(question => (
            <Accordion
              key={question.id}
              {...question}
              selected={setselectedQuestion}
              onClick={setSetselectedQuestion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
