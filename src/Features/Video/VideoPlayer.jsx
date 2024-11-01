import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { HiPlay, HiPause } from "react-icons/hi";
import { FiMaximize, FiMinimize } from "react-icons/fi";

function VideoPlayer() {
  const { videoUrl } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (state) => {
    setProgress((state.playedSeconds / state.loadedSeconds) * 100);
    setCurrentTime(state.playedSeconds);
    setDuration(state.loadedSeconds);
  };

  const handleProgressClick = (e) => {
    const progressBar = e.target;
    const clickPosition = e.nativeEvent.offsetX;
    const newTime = (clickPosition / progressBar.offsetWidth) * duration;
    setCurrentTime(newTime);
  };

  const toggleFullScreen = () => {
    const videoContainer = document.getElementById("video-container");
    if (videoContainer) {
      if (!isFullScreen) {
        videoContainer.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div
      id="video-container"
      className="h-screen w-screen bg-black flex flex-col items-center justify-center"
    >
      <div className="relative w-full h-full">
        <ReactPlayer
          url={decodeURIComponent(videoUrl)}
          playing={isPlaying}
          onProgress={handleProgress}
          width="100%"
          height="100%"
          controls={false} // Disable built-in controls to use custom controls
          className="rounded-none"
        />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
          {/* Custom Controls */}
          <div className="flex items-center justify-between">
            {/* Play/Pause Button */}
            <button onClick={handlePlayPause} className="text-white">
              {isPlaying ? <HiPause size={30} /> : <HiPlay size={30} />}
            </button>

            {/* Progress Bar */}
            <div
              className="relative w-3/4 h-2 bg-gray-700 rounded-full mx-4 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Time Display */}
            <div className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Full-Screen Toggle */}
            <button onClick={toggleFullScreen} className="text-white">
              {isFullScreen ? (
                <FiMinimize size={20} />
              ) : (
                <FiMaximize size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
