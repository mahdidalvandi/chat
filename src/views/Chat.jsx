import React, { useEffect, useState } from "react";
import ChatInput from "../components/ChatInput";
import DefaultChatPage from "../pages/DefaultChatPage";
import Conversation from "../pages/Conversation";
import SideBar from "./SideBar";
import Collapse from "../components/Collapse";
import CurrentChatBtn from "../components/CurrentChatBtn";
import axios from "axios";

const Chat = ({ currentUser }) => {

  const [isSearched, setIsSearched] = useState(false);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatPageId, setChatPageId] = useState(1);
  const [rply, setRply] = useState("");
 const [replies , setReplies] = useState([])
  // user and message
  const [userdata, setUserData] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [chatlist, setchatlist] = useState([]);

  let user = JSON.parse(localStorage.getItem('chatgpt'));
 
  const token = `Bearer ${user.token}`

  const generatenewchatpage = () => {
    setChatPageId([Math.floor(Math.random() * 50000000)]);
    return;
  };


  /* Add new chat */

  const addNewChat = async (e) => {
    e.preventDefault();

    // const response = await axios.post("/chat/addnewchat", {
    //  from: currentUser
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
  const  generateNewReplies = (rply) =>  {
    const replys = [...replies];
    replys.push({ rply });
    return replys;
  };

  const sendChat = async (event) => {
    event.preventDefault()
    setIsSearched(true);

    if (msg.length > 0) {
      const response = await axios.post("https://172.22.30.22:5443/chat/message", {
        from: currentUser.user.username,
        message: msg,
      },{headers:{
        'Authorization': token
      }}  
      );
      setRply(response.data)
      const newReplies = generateNewReplies(rply)
      const newMessages = generateNewMessages(msg);
  
      setMessages(newMessages);     
      setReplies(newReplies)
      const newUserchat = {
        messages: newMessages,
        replies: newReplies , 
        currentUser,
      };
      setUserData(newUserchat);
      console.log(replies)
   


      setMsg("")
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
                    
                      <Conversation
                        key={chatPageId}
                        replies={replies}
                        chatPageId={chatPageId}
                        userdata={userdata}
                        messages={messages}
                        rply={rply}
                      />
                    )}
                      
                  </div>
                  <div className="w-full h-44 flex-shrink-0" />
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
