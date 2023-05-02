import React from "react";
import sun from "../public/sun.png";
import light from "../public/light.png";
import danger from "../public/danger.png";
const DefaultChatPage = () => {
  return (
    <div className="flex items-start text-center gap-3.5">
      <div className="flex flex-col gap-3.5 flex-1">
        <img src={sun} className="h-8 w-8 self-center" alt="sun" />
        <h2 className="text-lg font-normal text-black">Examples</h2>
        <ul className="flex flex-col gap-3.5 ">
          <li className="w-full text-black bg-gray-50 p-3 rounded-md">
            Explain quantum computing in simple terms
          </li>
          <li className="w-full  text-black bg-gray-50 p-3 rounded-md">
            Got any creative ideas for a 10 year old’s birthday?
          </li>
          <li className="w-full  text-black bg-gray-50 p-3 rounded-md">
            How do I make an HTTP request in JavaScript?
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3.5 flex-1">
        <img src={light} className="h-8 w-8 self-center" alt="light" />
        <h2 className="text-lg  text-black font-normal">Examples</h2>
        <ul className="flex  text-black flex-col gap-3.5 ">
          <li className="w-full bg-gray-50 p-3 rounded-md">
            Remembers what user said earlier in the conversation
          </li>
          <li className="w-full  text-black bg-gray-50 p-3 rounded-md">
            Allows user to provide follow-up corrections
          </li>
          <li className="w-full  text-black bg-gray-50 p-3 rounded-md">
            Trained to decline inappropriate requests
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3.5 flex-1">
        <img src={danger} className="h-8 w-8 self-center " alt="danger" />
        <h2 className="text-lg text-black font-normal">Examples</h2>
        <ul className="flex flex-col  text-black gap-3.5 ">
          <li className="w-full bg-gray-50 p-3 rounded-md">
            May occasionally generate incorrect information
          </li>
          <li className="w-full  text-black bg-gray-50 p-3 rounded-md">
            May occasionally produce harmful instructions or biased content
          </li>
          <li className="w-full  text-black bg-gray-50 p-3 rounded-md">
            Limited knowledge of world and events after 2021
          </li>
          <div className="w-full h-44 flex-shrink-0" />
        </ul>
      </div>
    </div>
  );
};

export default DefaultChatPage;
