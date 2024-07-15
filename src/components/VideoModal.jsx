import React from "react";
import { PlayBtn, X } from "react-bootstrap-icons";

const VideoModal = ({ videos }) => {
  return (
    <div className="border-l-primary border-l-2 rounded-md lg:max-w-[850px]  min-h-48 bg-white z-10 absolute top-1/4 left-1/4 max-md:max-w-[80wh] max-md:left-[5px] shadow-sm shadow-gray-100 px-3 py-4 pt-0">
      <p className="text-right text-xl font-extrabold cursor-pointer mb-1 items-end text-primary">
        <i className="bi bi-x"></i>
      </p>
      <h4 className="max-md:text-xs font-bold">{videos.videoTitle}</h4>
      <img
        src={videos.thumbnail}
        alt=""
        className="w-full max-w-[300px] my-2"
      />
      <p className="text-sm text-gray-800 mb-4">{videos.desc.slice(0, 300)}</p>
      <div className="inline-flex gap-3">
        <a
          href=""
          className="bg-primary px-3 py-2 mt-4 mx-auto rounded-md text-white text-md"
        >
          <i className="bi bi-play-btn me-2"></i>
          Play the video
        </a>
        <button
          href=""
          className="bg-gray-300 px-3 py-2 mt-4 mx-auto rounded-md text-black text-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
