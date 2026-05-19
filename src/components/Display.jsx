import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import Navbar from "./Navbar";

import { albumsData } from "../assets/assets";

const Display = ({ setOpen }) => {
  const displayRef = useRef();

  const location = useLocation();

  // Check if album page
  const isAlbum = location.pathname.includes("album");

  // Get Album ID
  const albumId = isAlbum
    ? location.pathname.slice(-1)
    : "";

  // Get Background Color
  const bgColor = isAlbum
    ? albumsData[Number(albumId)].bgColor
    : "#121212";

  // Change Background Dynamically
  useEffect(() => {
    if (displayRef.current) {
      if (isAlbum) {
        displayRef.current.style.background = `
          linear-gradient(${bgColor}, #121212)
        `;
      } else {
        displayRef.current.style.background =
          "#121212";
      }
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className="
        w-full
        m-2
        px-4 sm:px-6
        pt-4
        rounded
        text-white
        overflow-auto
        lg:w-[80%]
        lg:ml-0
      "
    >
      {/* Navbar */}
      <Navbar setOpen={setOpen} />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={<DisplayHome />}
        />

        <Route
          path="/album/:id"
          element={<DisplayAlbum />}
        />
      </Routes>
    </div>
  );
};

export default Display;