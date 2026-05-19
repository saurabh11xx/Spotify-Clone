import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">

      {/* Left Section */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12 rounded" src={track.image} alt="" />

        <div>
          <p className="font-semibold">{track.name}</p>
          <p className="text-sm text-gray-400">
            {track.desc.slice(0, 12)}
          </p>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-center gap-3 m-auto">

        {/* Controls */}
        <div className="flex gap-4 items-center">

          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt=""
          />

          <img
            onClick={previous}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt=""
          />

          {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          )}

          <img
            onClick={next}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt=""
          />

          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt=""
          />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-5 w-full">

          <p className="text-sm">
            {time.currentTime.minute}:
            {String(time.currentTime.second).padStart(2, "0")}
          </p>

          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] h-2 bg-gray-600 rounded-full cursor-pointer overflow-hidden"
          >
            <div
              ref={seekBar}
              className="h-full w-0 bg-green-500 rounded-full transition-all duration-200"
            ></div>
          </div>

          <p className="text-sm">
            {time.totalTime.minute}:
            {String(time.totalTime.second).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">

        <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="" />

        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="" />

        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="" />

        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="" />

        <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="" />

        <div className="w-20 bg-slate-50 h-1 rounded-full"></div>

        <img
          className="w-4 cursor-pointer"
          src={assets.mini_player_icon}
          alt=""
        />

        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player;