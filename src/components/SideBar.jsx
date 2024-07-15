import React, { useContext, useState } from "react";
import { Github, HouseDoor, QuestionCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { categories } from "../constants/categories";
import Category from "../context/Categories";
import { ExternalLink } from "react-external-link";

const SideBar = () => {
  const [categ, setCateg] = useContext(Category)
    
  return (
    <div className="border-2 border-r-gray-100 border-t-0 w-full max-w-[300px] min-h-16 px-3 py-4 max-md:hidden ">
      <Link
        to="/"
        title="Go to Home"
        className="flex gap-3 items-center px-4 font-semibold py-3 rounded-md text-sm border-x-primary hover:bg-gray-200 hover:text-primary mb-2"
      >
        <HouseDoor />
        <span className="">Home</span>
      </Link>
      <Link
        to="/"
        title="Go to About"
        className="flex gap-3 items-center px-4 font-semibold py-3 rounded-md text-sm border-x-primary hover:bg-gray-200 hover:text-primary mb-2"
      >
        <QuestionCircle />
        <span className="">About</span>
      </Link>
      <hr className="border-gray-300 my-3" />
      <h4 className="text-xs text-gray-400 font-semibold my-2">Categories</h4>
      {categories.map((category, index) => {
        return (
          <Link
            to="/"
            title="Go to About"
            className={`flex gap-3 items-center px-4 font-semibold py-3 rounded-md text-sm  hover:bg-gray-200 hover:text-primary mb-2 ${category.name == categ?'border-l-primary border-l-4 bg-gray-200 text-primary': ''} `}
            key={index}
            onClick={()=>{setCateg(category.name)}}
          >
            <i className={category.icon} ></i>
            <span className="">{category.name} </span>
          </Link>
        );
      })}
      <hr className="border-gray-300 my-4" />
      <h4 className="text-sm text-gray-400 font-semibold my-2">Copyright 2024, All right reserved by <ExternalLink href="https://www.github.com/OumarouSandaSouley" target="_blank" className="text-primary flex items-center gap-2"><Github /> <span> Oumarou Sanda Souley</span></ExternalLink> </h4>
    </div>
  );
};

export default SideBar;
