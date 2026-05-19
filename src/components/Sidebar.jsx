import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static top-0 left-0 z-50
          h-full bg-black text-white p-2
          flex flex-col gap-2
          transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

          lg:translate-x-0
          w-[75%] sm:w-[60%] md:w-[40%] lg:w-[20%]
        `}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-end lg:hidden">
          <button
            onClick={() => setOpen(false)}
            className="text-3xl px-2"
          >
            ×
          </button>
        </div>

        {/* Top Section */}
        <div className="bg-[#121212] rounded flex flex-col gap-4 p-4">

          <div
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
            className="flex items-center gap-4 cursor-pointer hover:text-green-500 transition"
          >
            <img className="w-6" src={assets.home_icon} alt="" />
            <p className="font-bold">Home</p>
          </div>

          <div className="flex items-center gap-4 cursor-pointer hover:text-green-500 transition">
            <img className="w-6" src={assets.search_icon} alt="" />
            <p className="font-bold">Search</p>
          </div>
        </div>

        {/* Library */}
        <div className="bg-[#121212] rounded flex-1 overflow-y-auto p-4">

          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-3">
              <img className="w-7" src={assets.stack_icon} alt="" />
              <p className="font-semibold">Your Library</p>
            </div>

            <img
              className="w-5 cursor-pointer"
              src={assets.plus_icon}
              alt=""
            />
          </div>

          {/* Playlist */}
          <div className="bg-[#242424] rounded p-4 mb-4">

            <h1 className="font-bold mb-2">
              Create your first playlist
            </h1>

            <p className="text-sm text-gray-300 mb-4">
              It's easy, we'll help you
            </p>

            <button className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;