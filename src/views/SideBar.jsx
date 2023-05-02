import { useState } from "react";
import Footer from "../components/Footer";
import BtnNewchat from "../components/NewChatButton";

const SideBar = ({ collapsed, chatPageId, chatlist, addNewChat }) => {
  return (
    <aside
      className={
        collapsed
          ? "relative lg:flex min-w-fit sm:hidden hidden md:hidden top-0 right-0 bottom-0 left-0 border-1border-solid border-gray-100"
          : "relative lg:hidden min-w-fit sm:hidden hidden md:hidden top-0 right-0 bottom-0 left-0 border-1border-solid border-gray-100"
      }
    >
      <div className=" overflow-auto border-gray-50  min-w-min h-full max-w-full ">
        <div className="flex border-2 rounded flex-col h-full">
          <main className="flex flex-col flex-1 min-h-0 border">
            {/* button */}
            <BtnNewchat addNewChat={addNewChat} />
            <div className="flex-1 min-h-0 pb-4 overflow-hidden ">
              <div className="px-4 overflow-hidden relative z-auto h-full w-full">
                <div className="w-full h-full ">
                  {/* ChatlistBtn */}
                  {chatlist}
                </div>
                <div className="pointer-events-none absolute right-1 top-0.5 bottom-0.5"></div>
              </div>
            </div>
            {/* Store */}
            {/* <div className="p-4 w-full">
              <Store text="Store" />
            </div> */}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
