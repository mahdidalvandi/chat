import React from "react";
import bot from "../public/bot.png";
const Reply = ({ messages }) => {
  return (
    <div className="flex w-full mb-6 overflow-hidden">
      <div className="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2">
        <div className=" rounded-full">
          <span className="flex items-center justify-center rounded-full ">
            <img src={bot} alt="bot" />
          </span>
        </div>
      </div>
      <div className="text-sm items-end">
        <p className="text-black text-right text-xs">Sent now</p>
        <div className="flex items-end min-w-max gap-1 mt-2 ">
          <div className="text-black min-w-[20px] rounded-md p-3 bg-[#64d3ff]">
            <div className="leading-relaxed break-words">
              <div className="whitespace-pre-wrap text-black">
                We Get your Message
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <button
              className="transition text-neutral-300 hover:text-neutral-800
       dark:hover:text-neutral-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-44 flex-shrink-0" />
    </div>
  );
};

export default Reply;
