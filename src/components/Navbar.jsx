import { Github, Search } from "react-bootstrap-icons";
import logoImg from "../images/logo.png";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
    const [navbar, setNavbar] = useState('hidden')
    const search = ()=>{
        console.log('search')
    }
  return (
    <nav className="w-full min-h-[65px] shadow-sm  flex items-center justify-between px-3">
      <div className="">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Logo" className="w-[48px] h-[48px]" />
          <h3 className="text-2xl font-bold">
            OSS<span className="text-primary">Tube</span>
          </h3>
        </Link>
      </div>
      <div className={`border-2 flex  rounded-md items-center justify-between px-3 border-gray-100 lg:max-w-[450px]  w-full max-md:max-w-[80%] max-md:${navbar} z-[2] max-md:absolute max-md:top-[65px]  max-md:right-10 max-md:border-b-primary`}>
        <Search
          size={20}
          className="text-black font-bold order-2 cursor-pointer"
          onClick={search}
        />
        <input
          type="text"
          className="pe-3 ps-1 py-2 focus:outline-none rounded-md  w-full "
          placeholder="Search here"
          id="search"
          name="search"
        />
      </div>
      <div className="social flex items-center">
      <Search
          size={20}
          className="text-black font-bold me-2 text-xl lg:hidden cursor-pointer"
          onClick={()=>{
            if (navbar == 'hidden') {
                setNavbar('block')
            } else {
                setNavbar('hidden')
            }
            console.log(navbar)
          }}
        />
        <ExternalLink
          href="https://www.github.com/OumarouSandaSouley"
          target="_blank"
          title="Oumarou Sanda Souley Github account"
        >
          <Github className="text-3xl cursor-pointer" />
        </ExternalLink>
      </div>
    </nav>
  );
};

export default Navbar;
