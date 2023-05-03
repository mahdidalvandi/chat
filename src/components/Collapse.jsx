import React from "react";

const Collapse = ({ setCollapsed, collapsed }) => {
  const collapseHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      onClick={collapseHandler}
      className={
        collapsed
          ? "relative md:hidden block bg-zinc-300 w-6 h-6 top-56 left-56 z-10 rounded-xl rotate-180"
          : "relative grid bg-zinc-400 w-6 h-6 top-56 -right-3 z-10 rounded-xl rotate-180"
      }
    >
      <i className="rotate-180">
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z"
            fill="currentColor"
          ></path>
        </svg>
      </i>
    </div>
  );
};

export default Collapse;
