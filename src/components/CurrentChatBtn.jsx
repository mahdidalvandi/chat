import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const CurrentChatBtn = ({ chatPageId }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("New Chat");
  const { id } = useParams();
  console.log(chatPageId);
  console.log(id);
  return (
    <div className="box-border min-w-full mb-3">
      <div className="flex flex-col gap-2 text-sm">
        <div>
          <a className="relative hover:bg-slate-400 flex items-center gap-3 px-3 py-3 break-all border rounded-md cursor-pointer">
            <span>
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
                  d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994ZM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12Zm-6-8h2v2h-2v-2Zm-6 0h2v2H8v-2Z"
                ></path>
              </svg>
            </span>
            <div
              onClick={() => navigate(`/home/${chatPageId}`)}
              className="relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap"
            >
              <span>{title}</span>
            </div>

            <div className="absolute z-10 flex visible right-1">
              <button class="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class=" iconify iconify--ri"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.414 15.89L16.556 5.748l-1.414-1.414L5 14.476v1.414h1.414Zm.829 2H3v-4.243L14.435 2.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 17.89ZM3 19.89h18v2H3v-2Z"
                  ></path>
                </svg>
              </button>
              <button class="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class=" iconify iconify--ri"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3Zm1 2H6v12h12V8Zm-9 3h2v6H9v-6Zm4 0h2v6h-2v-6ZM9 4v2h6V4H9Z"
                  ></path>
                </svg>
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurrentChatBtn;
