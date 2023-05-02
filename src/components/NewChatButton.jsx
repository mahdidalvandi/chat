import React from "react";

const NewChatButton = ({ addNewChat }) => {
  return (
    <div className="p-4 w-full">
      <button
        onClick={addNewChat}
        className=" w-full m-0 p-0 items-center cursor-pointer justify-center
         bg-transparent hover:bg-green-500 text-gray-600 font-semibold hover:text-white
          py-2 px-4 border border-green-500
           hover:border-transparent rounded"
      >
        <span>New Chat</span>
      </button>
    </div>
  );
};

export default NewChatButton;
