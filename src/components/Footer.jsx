import React from "react";
import avatar from "../public/avatar.png";
import gear from "../public/gear.png";
const Footer = () => {
  return (
    <footer className="flex items-center justify-between min-w-0 p-4 overflow-hidden border-t ">
      <div className="flex items-center">
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <span className="flex items-center justify-center rounded-full ">
            <img src={avatar} alt="avatar" />
          </span>
        </div>
        <div className="ml-2">
          <h2 className="font-bold text-xl">User</h2>
          <p className="font-medium">
            <span>Welcome</span>
          </p>
        </div>
      </div>
      <div>
        <button>
          <img src={gear} className="ml-4 h-12 w-12" alt="gear" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
