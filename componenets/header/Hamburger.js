import React, { useContext } from "react";
import { NavContext } from "../../utils/NavContext";
const Hamburger = () => {
  const { closed, setClosed } = useContext(NavContext);
  return (
    <button
      aria-label="Open Nav"
      className="relative z-[3] m-0 ml-auto border-0 bg-transparent p-0 min-[778px]:hidden"
      onClick={() => setClosed(!closed)}
    >
      <div
        className={`relative z-[3] ml-auto block w-[30px] before:block before:h-0.5 before:w-[30px] before:bg-base-text before:content-[''] before:transition-all before:duration-500 after:block after:h-0.5 after:w-[30px] after:bg-base-text after:content-[''] after:transition-all after:duration-500 before:my-1.5 after:my-1.5 ${
          closed
            ? "before:translate-y-2 before:rotate-[135deg] before:bg-[hsla(0deg_0%_0%_/_60%)] after:-translate-y-2 after:rotate-[-135deg] after:bg-[hsla(0deg_0%_0%_/_60%)]"
            : ""
        }`}
      >
        <div
          className={`mx-auto h-0.5 w-5 bg-base-text transition-all duration-500 ${
            closed
              ? "scale-0 bg-[hsla(0deg_0%_0%_/_60%)]"
              : ""
          }`}
        />
      </div>
    </button>
  );
};

export default Hamburger;
