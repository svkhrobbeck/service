import { useRef } from "react";
import { iconArrowBottom } from "../assets";

const Accordion = ({ title, id, desc, selected, onClick }) => {
  const isOpen = id === selected;
  const elContent = useRef(null);

  return (
    <div className={`shadow-accordion accordion ${isOpen ? "accordion--open" : ""}`}>
      {/* accordion toggler */}
      <div
        className="accordion__toggler flex justify-between items-center gap-[30px] bg-teal/[.1] border border-solid border-[#fff]/[.2] p-[10px] xs:p-[12px] sm:p-[15px] md:p-[17px] lg:p-[20px] transition-main select-none rounded-none cursor-pointer"
        onClick={() => onClick(isOpen ? "" : id)}
      >
        {/* accordion title */}
        <h3 className="font-22">{title}</h3>

        {/* accordion iocn */}
        <img
          className={`w-[16px] h-[16px] object-contain transition-main ${isOpen ? "rotate-180" : ""}`}
          src={iconArrowBottom}
          alt="icon arrow"
          width={16}
          height={16}
        />
      </div>

      {/* accordion content */}
      <div
        ref={elContent}
        style={isOpen ? { height: elContent?.current?.scrollHeight + 45 + "px" || "110px" } : {}}
        className={`border border-solid border-[#fff]/[.2] border-t-0 transition-main h-0 flex overflow-hidden ${
          isOpen
            ? "rounded-bl-[8px] rounded-br-[8px] [&:last-child]:border-b-[#fff]/[.2] p-[12px] xs:p-[15px] md:p-[17px] lg:p-[20px]"
            : "py-0 px-[12px] xs:px-[15px] md:px-[17px] lg:px-[20px] [&:last-child]:border-b-0"
        }`}
      >
        <p className="font-17 font-normal text-[#fff]/[.9] leading-[1.4]">{desc}</p>
      </div>
    </div>
  );
};

export default Accordion;
