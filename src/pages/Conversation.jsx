import React from "react";
import avatar from "../public/avatar.png";
import bot from "../public/bot.png";
import { useEffect } from "react";
import { useState } from "react";

const Conversation = ({ userdata, messages, replies }) => {

  console.log(replies)

  const current = new Date();
 return (
    <div className="">
{messages.map((item)=>{
 return (
  <div className="flex w-full mb-6 overflow-hidden flex-row-reverse">
          <div className="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2">
            <div className="rounded-full">
              <span className="flex items-center justify-center rounded-full ">
                <img src={avatar} alt="avatar" />
              </span>
            </div>
          </div>
          <div className="text-sm items-end">
            <p className="text-black text-right text-xs">
              {current.getHours()}:{current.getMinutes()}
            </p>

            <div className="flex items-end min-w-max gap-1 mt-2 flex-row-reverse">
              <div className="text-black min-w-[20px] rounded-md p-3 bg-[#b7ffb6]">
                <div className="leading-relaxed break-words">
                  <div className="whitespace-pre-wrap text-black">
                    <div>
                      <p>{item.message}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <button className="transition text-neutral-300 hover:text-neutral-800">
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
        </div>
)})}
       {replies?.map((item)=>{
        
  return(
  <div className="flex w-full mb-6 overflow-hidden">
  <div className="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2">
    <div className=" rounded-full">
      <span className="flex items-center justify-center rounded-full ">
        <img src={bot} alt="bot" />
      </span>
    </div>
  </div>
  <div className="text-sm items-end">
    <p className="text-black text-left text-xs">{item.replydate}</p>
    <div className="flex items-end min-w-max gap-1 mt-2 ">
      <div className="text-black min-w-[20px] rounded-md p-3 bg-[#64d3ff]">
        <div className="leading-relaxed break-words">
          <div className="whitespace-pre-wrap text-black"> {item.replymessage}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <button
          className="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200">
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
</div>
  )
  })}
   
    </div>
  );
};

export default Conversation;
