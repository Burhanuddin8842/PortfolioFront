import React from 'react'

const Code = () => {
  return (
    <>
    <div className="flex  bg-gray-800 h-full w-full items-center justify-center">

    <div className="h-[98%] w-[98%] overflow-scroll">
        {/* <code className="h-full w-full"></code> */}
        <div className="grid grid-cols-10 py-4">
            <div className="col-span-1 h-[20%] text-sm text-gray-500 flex items-center justify-end">1</div>
            <div className="col-span-9 h-[20%] text-sm text-gray-500 flex items-center justify-start px-2">&#123;</div>
            <div className="col-span-1 h-[20%] text-sm text-gray-500 flex items-center justify-end">2</div>
            <div className="col-span-9 h-[20%] text-sm text-white flex items-center justify-start px-2">
                <span className="text-blue-500">"name"</span>: <span className="text-green-400">"Burhanuddin"</span>,
            </div>
            <div className="col-span-1 h-[20%] text-sm text-gray-500 flex items-center justify-end">3</div>
            <div className="col-span-9 h-[20%] text-sm text-white flex items-center justify-start px-2">
                <span className="text-blue-500">"role"</span>: <span className="text-green-400">"Full Stack Web Developer"</span>,
            </div>
            <div className="col-span-1 h-[20%] text-sm text-gray-500 flex items-center justify-end">4</div>
            <div className="col-span-9 h-[20%] text-sm text-white flex items-center justify-start px-2">
                <span className="text-blue-500">"Stack"</span>: &#123;
            </div>
            <div className="col-span-1 h-[20%] text-sm text-gray-500 flex items-center justify-end">5</div>
            <div className="col-span-9 h-[20%] text-sm text-white flex items-center justify-start px-5">
                <span className="text-blue-500">"Frontend"</span>: <span className="text-green-400">"ReactJS"</span>,
            </div>
            <div className="col-span-1 h-[20%] text-sm text-gray-500 flex items-center justify-end">6</div>
            <div className="col-span-9 h-[20%] text-sm text-white flex items-center justify-start px-5">
                <span className="text-blue-500">"Backend"</span>: <span className="text-green-400">" 'NodeJS' and 'ExpressJS'  "</span>,
            </div>
            <div className="col-span-1 h-[20%] text-sm text-gray-500 flex items-center justify-end">7</div>
            <div className="col-span-9 h-[20%] text-sm text-white flex items-center justify-start px-5">
                <span className="text-blue-500">"Database"</span>: <span className="text-green-400">"MongoDB"</span>,
            </div>
            <div className="col-span-1 h-[20%] text-sm text-gray-500 flex items-center justify-end">8</div>
            <div className="col-span-9 h-[20%] text-sm text-white flex items-center justify-start px-2">
                &#125;  ,
            </div>
            <div className="col-span-1 h-[20%] text-sm text-gray-500 flex items-center justify-end">9</div>
            <div className="col-span-9 h-[20%] text-sm text-white flex items-center justify-start px-2">
                <span className="text-blue-500">"location"</span>: <span className="text-green-400">"Remote"</span>,
            </div>
            <div className="col-span-1 h-[20%] text-sm text-gray-500 flex items-center justify-end">10</div>
            <div className="col-span-9 h-[20%] text-sm text-white flex items-center justify-start px-2">
                <span className="text-blue-500">"Open to Work"</span>: <span className="text-purple-400">  true</span>,
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Code