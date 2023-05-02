import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import GPT from "../public/gpt.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    const { data } = await axios.post("/user/login", {
      password,
      username,
    });
    if (data.status === false) {
      toast.error(data.msg);
    }
    if (data.status === true) {
      localStorage.setItem("chatgpt", JSON.stringify(data.user));
      navigate("/");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("chatgpt")) {
      navigate("/");
    }
  }, []);
  const handleValidation = () => {
    if (username == "") {
      toast.error("username field is blank");
      return false;
    } else if (password == "") {
      toast.error("password field is blank ");
      return false;
    } else toast.error("Wrong username or password");
    return true;
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 rounded-2xl bg-white shadow-lg">
          <div className="flex justify-center items-center ">
            <img src={GPT} className="w-20 h-20 text-blue-600" />
            <h3 className="text-2xl font-semibold text-center">
              Login to your
              <span className="text-blue-600 font-bold"> ChatGPT</span> account
            </h3>
          </div>

          <form>
            <p>UserName:</p>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-600"
              type="text"
              placeholder="UserName"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p>Password:</p>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-600"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center space-x-3">
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700
   text-white font-bold py-2 px-4 m-2 rounded-full"
              >
                Login
              </button>
              <span className="font-semibold">
                Dont have an account?{" "}
                <Link to="/register" className="font-normal">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
