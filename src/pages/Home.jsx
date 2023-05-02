import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Chat from "../views/Chat";
const Home = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    async function checkLocalStorage() {
      if (!localStorage.getItem("chatgpt")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chatgpt")));
      }
    }
    checkLocalStorage();
  }, []);
  return (
    <>
      <div className="flex w-full p-6 ">
        <Chat currentUser={currentUser} />
      </div>
    </>
  );
};

export default Home;
