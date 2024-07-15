import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../constants/categories";
import Category from "../context/Categories";
import VideoCard from "./VideoCard";
import { fetchFromAPI } from "../constants/apiRequests";

const HomeFeed = () => {
  const [categ, setCateg] = useContext(Category);
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${categ}`)
      .then((data)=>{
        setVideos(data.items)
        
      })
  }, [categ]);


  return (
    <section className="py-4 pe-3 max-md:px-3 overflow-hidden">
      <div className="w-full overflow-x-scroll  flex items-center gap-2 py-2 main lg:hidden">
        {categories.map((category, index) => {
          return (
            <Link
              to="/"
              title="Go to About"
              className={`flex gap-3 text-sm px-4 font-semibold py-2 rounded-md  hover:bg-gray-200 hover:text-primary me-2 text-black ${
                categ == category.name ? `bg-gray-200 text-primary` : ""
              } `}
              key={index}
              onClick={() => {
                setCateg(category.name);
              }}
            >
              <i
                className={`${category.name == categ ? "block" : "hidden"} ${
                  category.icon
                }`}
              ></i>
              <span className="">{category.name} </span>
            </Link>
          );
        })}
      </div>
      <h4 className="my-2 font-bold text-3xl">
        Showing <span className="text-primary">{categ} </span> videos
      </h4>
      <div className="grid max-xl:grid-cols-4 lg:grid-cols-3 max-md:grid-cols-1 gap-4 pt-4">
        {videos.map((item, index) => {
          return <VideoCard video={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default HomeFeed;
