import React, { useState } from "react";
import ChatInput from "../components/ChatInput";
import DefaultChatPage from "../pages/DefaultChatPage";
import SearchPage from "../pages/SearchPage";
import SideBar from "./SideBar";
import Collapse from "../components/Collapse";
import { Navigate, useNavigate } from "react-router-dom";
import CurrentChatBtn from "../components/CurrentChatBtn";

const Chat = ({ currentUser }) => {
  const [isSearched, setIsSearched] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatPageId, setChatPageId] = useState(1);
  const [reply, setReply] = useState([]);
  const [msg, setMsg] = useState("");
  // user and message
  const [userdata, setUserData] = useState({});
  const [collapsed, setCollapsed] = useState(true);
  const [chatlist, setchatlist] = useState([]);

  const generatenewchatpage = () => {
    setChatPageId([Math.floor(Math.random() * 50000000)]);
    return;
  };

  const Data = [{ userdata }, { chatPageId }, { reply }];

  /* Add new chat */

  const addNewChat = async (e) => {
    e.preventDefault();

    // const response = await axios.post("/user/addnewchat", {
    //   currentUser,
    // });

    generatenewchatpage();

    setchatlist([
      ...chatlist,
      <CurrentChatBtn
        chatPageId={chatPageId}
        collapsed={collapsed}
        key={chatPageId}
      />,
    ]);
  };

  const generateNewMessages = (msg) => {
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    return msgs;
  };
  const sendChat = async (event) => {
    setIsSearched(true);
    event.preventDefault();
    if (msg.length > 0) {
      const newMessages = generateNewMessages(msg);
      setMessages(newMessages);

      const response = await axios.post(
        "https://172.22.30.22:5443/chat/message",
        {
          from: currentUser.username,
          message: msg,
        }
      );
      setReply(response.data);

      const newUserchat = {
        messages: newMessages,
        currentUser,
      };
      setUserData(newUserchat);
      setMsg("");
    }
  };

  return (
    <>
      <Collapse setCollapsed={setCollapsed} collapsed={collapsed} />
      <SideBar
        addNewChat={addNewChat}
        chatlist={chatlist}
        chatPageId={chatPageId}
        collapsed={collapsed}
      />
      <div className="border-solid border-2 w-full ">
        <div className="flex flex-col w-full ">
          <main className="flex-1 overflow-hidden w-full">
            <div className=" w-full overflow-hidden overflow-y-auto p-4">
              <div className="w-full max-w-screen-xl m-auto">
                <div className="flex flex-col w-full items-center text-sm ">
                  <div
                    className="text-gray-800 w-full md:max-w-2xl md:h-full
                 md:flex md:flex-col px-6 dark:text-gray-100"
                  >
                    <h1 className="text-4xl text-black font-semibold ml-auto mr-auto mb-16">
                      ChatGPT
                    </h1>
                    {chatPageId && !isSearched && <DefaultChatPage />}
                    {isSearched && (
                      <SearchPage
                        chatPageId={chatPageId}
                        userdata={userdata}
                        messages={messages}
                        reply={reply}
                      />
                    )}
                  </div>
                  {/* Input */}
                  <ChatInput
                    isSearched={isSearched}
                    setIsSearched={setIsSearched}
                    sendChat={sendChat}
                    msg={msg}
                    setMsg={setMsg}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Chat;
