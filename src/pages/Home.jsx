import { SiFiverr } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { HiDocumentDownload } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from 'react'
import Code from "../Screens/Code";

const Home = () => {
  return (
    <div className='text-white min-h-screen px-4 py-6 lg:py-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 pt-[7vh]' id='home'>
      <div className="w-full max-w-2xl col-span-1">
        {/* Main Heading with gradient */}
        <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight">
          <span className="text-gray-400 font-medium">Hi, I am</span> <br />
          <span className="text-4xl sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent inline-block font-emphasis">
            Burhanuddin.
          </span><br />
          <span className="text-gray-200">I build </span>
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Full-Stack Solutions</span>
        </h1>

        <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed mt-6 font-light">
          Turning complex problems into elegant code. Specializing in the MERN stack to deliver scalable, high-performance web applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-6">
          <a href="#projects">
            <button className="group px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105 cursor-pointer active:scale-95">
              <span className="font-semibold text-sm">View Projects</span>
              <AiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
          <a href="/Burhanuddin_Ali_Asghar_CV_ModernVariant.pdf" download>
            <button className="group px-5 py-2.5 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer active:scale-95">
              <HiDocumentDownload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span className="font-medium text-sm">Get CV</span>
            </button>
          </a>
        </div>
      </div>


      <div className="col-span-1 w-full mt-6 lg:mt-0">
        {/* Unified Code + Social Links Panel */}
        <div className="container border border-white/10 shadow-2xl shadow-blue-900/10 w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0 rounded-xl bg-gray-900/80 backdrop-blur-sm overflow-hidden flex flex-col">
          {/* Code Window Header with traffic light buttons */}
          <div className="min-h-[40px] sm:min-h-[50px] bg-gray-800/80 flex items-center justify-between px-3 sm:px-4 border-b border-white/5">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-xs text-gray-500 hidden sm:block">main.js</span>
          </div>

          {/* Code Content */}
          <div className="flex-1 min-h-[150px] sm:min-h-[200px] lg:min-h-[250px]">
            <Code />
          </div>

          {/* Social Links - merged into the same panel */}
          <div className="p-3 sm:p-4 grid grid-cols-3 border-t border-white/10 bg-gray-800/30">
            <a href="http://www.github.com/burhanuddin8842" className="flex items-center justify-center text-2xl sm:text-3xl text-gray-500 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/burhanuddin-aliasghar-1289a9379/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-2xl sm:text-3xl text-gray-500 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110">
              <AiFillLinkedin />
            </a>
            <a href="https://www.fiverr.com/s/XLyqG05" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-2xl sm:text-3xl text-gray-500 hover:text-white cursor-pointer transition-all duration-300 hover:scale-110">
              <SiFiverr />
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
