import React from "react";
import Image from "next/image";
import docs from "../../../images/docs.png";
import community from "../../../images/community.png";
import tip from "../../../images/tip.png";
import chatbot from "../../../images/chatbot.png";

function Support() {
  return (
    <div className="flex flex-col bg-slate-200 m-3">
      <div className="supportbg">
        <h1 className="italic font-thin font-serif text-right mr-20 mt-10 text-neutral-950">
          How can we help you ?
        </h1>
        <input
          type="text"
          className="mr-20 ml-[35%] md:ml-[65%] p-2 w-[30%] bg-slate-200 rounded-xl hover:border-2 hover:border-slate-300 hover:shadow-md"
          placeholder="Type your message here ..."
        />
        <button className="ml-[35%] md:ml-[78%] mt-2 w-20 bg-violet-600 px-4 py-2 rounded-full text-neutral-100 font-semibold ">
          Send
        </button>
        <div className="flex ml-[20%] md:ml-[65%] mt-14 text-neutral-800">
          <h6 className="font-bold ">Follow us at :- </h6>
          <div className="ml-10  flex flex-wrap gap-3  scale-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="gray"
            class="bi bi-instagram pointer"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="gray"
            class="bi bi-facebook pointer"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="gray"
            class="bi bi-twitter pointer"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
          </div> 
        </div>
      </div>
      <div className="bg-slate-300 p-2 flex flex-wrap w-full mt-3">
        <div><input
          type="text"
          className="p-3 px-10 w-[80vw] mt-2 py-2 pl-5 bg-slate-100 rounded-xl "
          placeholder="Find what your are Searching for ..."
        /></div>
        <div><button className="w-28 m-2 bg-violet-700 py-2 rounded-lg text-neutral-100 font-semibold ">
          Search
        </button></div>
      </div>
      <div className="">
        <div className="grid gap-2 md:grid-cols-3 mt-2 text-center px-5 py-10 bg-slate-300">
          <div className="w-[90%] border-2 p-10 bg-slate-100 border-slate-100 rounded-2xl shadow-lg">
            <Image
              className="rounded-full m-auto shadow-xl border-4 border-slate-200"
              src={docs}
              width={150}
              height={150}
              alt="docs"
            />
            <h4 className="mt-2 font-mono">Read Our Docs</h4>
            <p className="">
              Learn quick and easy steps on How to setup and Use Shaukeens
            </p>
          </div>
          <div className="w-[90%] border-2 p-10 bg-slate-100 border-slate-100 rounded-2xl shadow-lg">
            <Image
              className="rounded-full m-auto shadow-xl border-4 border-slate-200"
              src={community}
              width={150}
              height={150}
              alt="docs"
            />
            <h4 className="mt-2 font-mono">Ask the community</h4>
            <p className="">
              Learn quick and easy steps on How to setup and Use Shaukeens
            </p>
          </div>
          <div className="w-[90%] border-2 p-10 bg-slate-100 border-slate-100 shadow-lg rounded-2xl">
            <Image
              className="rounded-full m-auto shadow-xl border-4 border-slate-200"
              src={tip}
              width={130}
              height={100}
              alt="docs"
            />
            <h4 className="mt-2 font-mono">Share a tip</h4>
            <p className="">
              Learn quick and easy steps on How to setup and Use Shaukeens
            </p>
          </div>

          <div className="fixed">
            <Image
              className="md:ml-[82vw] mt-32 rounded-full border-2 shadow-xl"
              src={chatbot}
              width={100}
              height={100}
              alt="chatbot"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
