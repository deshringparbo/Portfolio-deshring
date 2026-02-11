import React from "react";

const Buttons = (props) => {
  return (
    <button
      onClick={() => {}} // need to add link to open
      className="hidden lg:block bg-amber-50 text-black px-3 py-1 rounded-3xl hover:cursor-pointer hover:bg-gray-200  active:bg-gray-300"
    >
      {props.name}
    </button>
  );
};

export default Buttons;
