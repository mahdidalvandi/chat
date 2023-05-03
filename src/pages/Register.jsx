import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GPT from "../public/gpt.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  useEffect(() => {
    if (localStorage.getItem("chatgpt")) {
      navigate("/");
    }
  }, []);

  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerButton = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { data } = await axios.post("https://172.22.30.22:5443/user/register", {
        password,
        username,
        email,
      });
      if (data.status === false) {
        toast.error(data.msg);
      }
      if (data.status === true) {
       
        navigate("/login");
      }
    }
  };

  const handleValidation = () => {
    if (password !== confirmPassword) {
      toast.error("passwords are not same");
      return false;
    } else if (username?.length < 3) {
      toast.error("username should be grather than 3 characters");
      return false;
    } else if (password?.length < 8) {
      toast.error("Password should be atleast 8 characters");
      return false;
    } else if (email == "") {
      toast.error("email field should not be blank");
      return false;
    } else if (email == "") {
      toast.error("email field should not be blank");
      return false;
    }
    return true;
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 rounded-2xl bg-white shadow-lg">
          <div className="flex justify-center items-center ">
            <img src={GPT} className="w-20 h-20 text-blue-600" />
            <h3 className="text-2xl font-semibold text-center">
              Register in
              <span className="text-blue-600 font-bold"> ChatGPT</span>
            </h3>
          </div>

          <form>
            <p>UserName: </p>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-600"
              type="text"
              placeholder="UserName"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p>Email: </p>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-600"
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Password:</p>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-600"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>confirmPassword:</p>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-600"
              type="password"
              placeholder="confirmPassword"
              name="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex items-center space-x-3">
              <button
                onClick={registerButton}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700
text-white font-bold py-2 px-4 m-2 rounded-full"
              >
                Register
              </button>
              <span className="font-semibold">
                Do you have an account?
                <Link to="/Login" className="font-normal">
                  Login
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

export default Register;
