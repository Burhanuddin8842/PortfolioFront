import { TbBrandUpwork } from "react-icons/tb";
import { SiFreelancer } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { HiDocumentDownload } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import React, { useReducer } from 'react'
import { IoMdClose } from "react-icons/io";
import { FiMinimize2 } from "react-icons/fi";
import { VscChromeMinimize } from "react-icons/vsc";
import Code from "../Screens/Code";
const Home = () => {
  let initscreen = {
    git: false,
    link: false,
    fiverr: false,
    freelancer: false,
    upwork: false
  }

  const reducer = (state, action) => {
    if (action.type == "gitstart") {
      console.log("github was hovered")
      return{
       git: true,
    link: false,
    fiverr: false,
    freelancer: false,
    upwork: false 
      }
    }
  }
  let [screen, dispatch] = useReducer(reducer, initscreen)

  return (
    <div className='text-white min-h-[93vh] px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8' id='home'>
      <div className="w-full max-w-2xl col-span-1">
        {/* <h1 className="text-6xl font-bold leading-tight">
          Hi, I'm Burhanuddin.<br />
          I build full-stack<br />
          <span className="bg-gradient-to-r from-white via-slate-400 to-slate-500 bg-clip-text text-transparent">
            solutions.
          </span>
        </h1> */}
        <h1 className="anim gard text-3xl lg:text-5xl font-bold comic-relief-bold">
          Hi, I am <br />
          <span className='text-4xl lg:text-7xl'>Burhanuddin.</span><br />
          I build Full-Stack Solutions
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-light font-mono my-4">
          Turning complex problems into elegant code. Specializing in the MERN stack to deliver scalable, high-performance web applications.
        </p>

        <div className="mx-4 flex gap-4 items-center justify-start flex-wrap">
          <button className="p-3 bg-blue-600 rounded-sm flex items-center gap-2 hover:shadow-blue-300 hover:scale-105 transition-all shadow-lg cursor-pointer active:scale-100 w-full lg:w-auto justify-center">
            View Projects <AiOutlineArrowRight />
          </button>
          <a href="/Burhanuddin_Ali_Asghar_CV_ModernVariant.pdf" download className="w-full lg:w-auto">
            <button className="p-3 bg-none border-white border-2 rounded-sm flex items-center gap-2 hover:shadow-blue-300 hover:scale-105 transition-all shadow-lg cursor-pointer active:scale-100 justify-center w-full lg:w-auto">
              Get CV <HiDocumentDownload />
            </button>
          </a>
        </div>
      </div>


      <div className="col-span-1">
        <div className="container border-white shadow-lg shadow-blue-100 w-full max-w-md lg:max-w-none mx-auto lg:mx-0 aspect-square rounded-md bg-black">
          <div className="h-[80%]">
            <div className="min-h-[7%] backdrop-blur-[10px] bg-black">
              <div className="w-full flex gap-4 justify-start h-full">
                <div className="flex items-center gap-3 h-full p-3">
                  <button className="text-xs text-black font-medium rounded-full p-1 cursor-pointer bg-red-600 flex items-center justify-center text-center">
                    {/* <IoMdClose /> */}
                  </button>
                  <button className="text-xs text-black p-1 cursor-pointer font-medium rounded-full bg-yellow-500 flex items-center justify-center text-center">
                    {/* <FiMinimize2 />                    </button> */}</button>
                  <button className="text-xs text-black p-1 cursor-pointer font-medium rounded-full bg-green-600 flex items-center justify-center text-center">
                    {/* <VscChromeMinimize /> */}
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[93%]">
              <Code />
            </div>
          </div>
          <div className="min-h-[20%] md:border-t-2 border-white p-4 grid grid-cols-4">
            <div className="col-span-1 flex items-center justify-center text-3xl hover:text-blue-700 cursor-pointer" onMouseEnter={() => dispatch({ type: "gitstart" })} onMouseLeave={()=>dispatch({type: "end"})}>
              <BsGithub />
            </div>
            <div className="col-span-1 flex items-center justify-center text-3xl hover:text-blue-700 cursor-pointer" onMouseEnter={() => dispatch({ type: "linkstart" })} onMouseLeave={()=>dispatch({type: "end"})}>
              <AiFillLinkedin />
            </div>
            <div className="col-span-1 flex items-center justify-center text-3xl hover:text-blue-700 cursor-pointer" onMouseEnter={() => dispatch({ type: "fiverrstart" })} onMouseLeave={()=>dispatch({type: "end"})}>
              <SiFiverr />
            </div>
            {/* <div className="col-span-1 flex items-center justify-center text-3xl hover:text-blue-700 cursor-pointer">
              <SiFreelancer />
            </div> */}
            <div className="col-span-1 flex items-center justify-center text-3xl hover:text-blue-700 cursor-pointer">
              <TbBrandUpwork />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home