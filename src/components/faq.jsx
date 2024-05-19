import { useState } from "react";
import { Accordion } from ".";
import frequentlyQuestions from "../data/faq.json";

const Faq = () => {
  const [setselectedQuestion, setSetselectedQuestion] = useState("");

  return (
    <section className="min-h-[60vh]" id="faq">
      {/* faq container */}
      <div className="container">
        {/* faq title */}
        <h2 className="font-55 text-gradient drop-shadow-teal bg-teal-gradient text-center uppercase mb-[53px] md:mb-[73px]">
          FAQ
        </h2>

        {/* accordions */}
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
