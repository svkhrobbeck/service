import { useRef } from "react";
import { iconArrowBottom } from "../assets";

const Accordion = ({ title, id, desc, selected, onClick }) => {
  const isOpen = id === selected;
  const elContent = useRef(null);

  return (
    <div className={`accordion ${isOpen ? "accordion--open" : ""}`}>
      <div className="accordion__toggler" onClick={() => onClick(isOpen ? "" : id)}>
        <h3 className="accordion__title">{title}</h3>
        <img
          className={`accordion__icon ${isOpen ? "accordion__icon--open" : ""}`}
          src={iconArrowBottom}
          alt="icon arrow"
          width={16}
          height={16}
        />
      </div>
      <div
        ref={elContent}
        style={isOpen ? { height: elContent?.current?.scrollHeight + 45 + "px" || "110px" } : {}}
        className={`accordion__content ${isOpen ? "accordion__content--open" : ""}`}
      >
        <p className="accordion__desc">{desc}</p>
      </div>
    </div>
  );
};

export default Accordion;
