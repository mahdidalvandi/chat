import React, { useState } from "react";

const ChatInput = ({ msg, setMsg, sendChat }) => {
  return (
    <footer className="w-full">
      <div className="w-full max-w-screen-xl m-auto">
        <div className="flex items-center justify-center space-x-2">
          <button className=" w-10 h-10 transition rounded-full hover:bg-neutral-100 dark:hover:bg-[#414755]">
            <span className="text-xl text-[#4f555e] dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3Zm1 2H6v12h12V8Zm-9 3h2v6H9v-6Zm4 0h2v6h-2v-6ZM9 4v2h6V4H9Z"></path>
              </svg>
            </span>
          </button>
          <input
            required
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            type="text"
            className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
            placeholder="Search here"
          />
          <button
            onClick={sendChat}
            className="space-x-2 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
          >
            <span className="n-button__icon">
              <div className="n-icon-slot" role="none">
                <span className="dark:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className=" iconify iconify--ri"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1.946 9.316c-.522-.175-.526-.456.011-.635L21.043 2.32c.529-.176.832.12.684.638l-5.453 19.086c-.151.529-.456.547-.68.045L12 14l6-8l-8 6l-8.054-2.684Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ChatInput;
