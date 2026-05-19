import React, { useContext, useState } from "react";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";

import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  // Sidebar Mobile State
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen bg-black">

      {/* Main Layout */}
      <div className="h-[90%] flex overflow-hidden">

        {/* Sidebar */}
        <Sidebar open={open} setOpen={setOpen} />

        {/* Display */}
        <Display setOpen={setOpen} />
      </div>

      {/* Player */}
      <Player />

      {/* Audio */}
      <audio
        ref={audioRef}
        src={track.file}
        preload="auto"
      ></audio>
    </div>
  );
};

export default App;