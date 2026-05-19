import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // Play Song
  const play = () => {
    if (!audioRef.current) return;

    audioRef.current.play();
    setPlayStatus(true);
  };

  // Pause Song
  const pause = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setPlayStatus(false);
  };

  // Play Song By ID
  const playWithId = (id) => {
    setTrack(songsData[id]);

    setTimeout(() => {
      audioRef.current.play();
    }, 0);

    setPlayStatus(true);
  };

  // Previous Song
  const previous = () => {
    if (track.id > 0) {
      setTrack(songsData[track.id - 1]);

      setTimeout(() => {
        audioRef.current.play();
      }, 0);

      setPlayStatus(true);
    }
  };

  // Next Song
  const next = () => {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);

      setTimeout(() => {
        audioRef.current.play();
      }, 0);

      setPlayStatus(true);
    }
  };

  // Seek Song
  const seekSong = (e) => {
    if (!audioRef.current || !seekBg.current) return;

    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  // Update Time & Seek Bar
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      if (!audio.duration) return;

      // Update seek bar
      if (seekBar.current) {
        seekBar.current.style.width =
          (audio.currentTime / audio.duration) * 100 + "%";
      }

      // Update time
      setTime({
        currentTime: {
          second: Math.floor(audio.currentTime % 60)
            .toString()
            .padStart(2, "0"),

          minute: Math.floor(audio.currentTime / 60),
        },

        totalTime: {
          second: Math.floor(audio.duration % 60)
            .toString()
            .padStart(2, "0"),

          minute: Math.floor(audio.duration / 60),
        },
      });
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, [track]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
