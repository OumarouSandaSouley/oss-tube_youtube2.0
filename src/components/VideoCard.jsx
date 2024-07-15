import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";

const  timeDiffFromNow = (dateString)=> {
  const currentDate = new Date();
  const givenDate = new Date(dateString);

  // Calculer la différence en millisecondes
  const difference = currentDate - givenDate;

  // Convertir la différence en secondes
  const secondsDiff = Math.floor(difference / 1000);

  // Calculer les minutes, heures, jours, mois, années
  const minutes = Math.floor(secondsDiff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);  // Approximation, peut varier selon les mois
  const years = Math.floor(months / 12); // Approximation, peut varier selon les années
  let duration = ""

  if (years != 0) {
    duration = years +" years"
  }
  else if (months != 0) {
    duration = months +" months"
  }
  else if (days != 0) {
    duration = days + " days"
  }
  else if (hours != 0) {
    duration = hours +" hours"
  }
  else{
    duration = minutes +" minutes"
  }
  return duration
}




const VideoCard = ({ video }) => {
    const [modal, setModal] = useState('hidden')
    const [videoDetails, setVideoDetails] = useState()
    
  return (
    <>
      <div
        className="px-4 pb-2  shadow-sm rounded-sm cursor-pointer"
        onClick={()=>{
            if (modal == 'hidden') {
                setModal('')
            } else {
                setModal('hidden')
            }
        }}
      >
        <img
          src={video.snippet?.thumbnails?.high?.url}
          alt={video.videoTitle}
          className="lg:max-w-[300px] w-full mb-2"
        />
        <div className="flex items-start gap-2 flex-row my-3">
          
          <div>
            <h3 className="font-bold text-sm text-black">
              {video.snippet.title.slice(0, 60)}
            </h3>
            <Link
              to={video.channelUrl}
              className="text-sm text-gray-400"
              title={video.channelTitle}
            >
              {video.snippet.channelTitle}
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">{timeDiffFromNow(video.snippet.publishTime)} ago </span>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal Goes Here */}
      <div className={`border-l-primary border-l-2 rounded-md lg:max-w-[850px]  min-h-48 bg-white z-10 absolute top-1/4 left-1/4 max-md:top-[10% ] max-md:max-w-[80wh] max-md:left-[5px] shadow-sm max-md:shadow-md shadow-gray-100 px-3 py-4 pt-0 ${modal}`}>
        <p className="text-right text-xl font-extrabold cursor-pointer mb-1 items-end text-primary">
          <i 
          className="bi bi-x" 
          onClick={()=>{
            if (modal == '') {
                setModal('hidden')
            }
        }}
          ></i>
        </p>
        <h4 className="max-md:text-xs font-bold">{video.snippet.title.slice(0, 60)}</h4>
        <img
          src={video.snippet?.thumbnails?.high?.url}
          alt=""
          className="w-full max-w-[300px] my-2"
        />
        <p className="text-sm text-gray-800 mb-4">
          {/* {videoDetails.snippet.description.slice(0, 300)} */}
        </p>
        <div className="inline-flex gap-3">
          <ExternalLink
            href={`https://www.youtube.com/watch?v=${video.id?.videoId}`}
            target="_blank"
            className="bg-primary px-3 py-2 mt-4 mx-auto rounded-md text-white text-md"
          >
            <i className="bi bi-play-btn me-2"></i>
            Play the video on YouTube
          </ExternalLink>
          <button
            href=""
            className="bg-gray-300 px-3 py-2 mt-4 mx-auto rounded-md text-black text-md"
            onClick={()=>{
                if (modal == '') {
                    setModal('hidden')
                }
            }}
          >

            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
