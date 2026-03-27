import React from 'react'

const Code = () => {
    return (
        <>
            <div className="flex bg-gray-900 h-full w-full items-start justify-center overflow-auto p-2 sm:p-4 font-code">

                <div className="h-full w-full overflow-auto">
                    {/* <code className="h-full w-full"></code> */}
                    <div className="grid grid-cols-8 sm:grid-cols-10 py-1 sm:py-2">
                        <div className="col-span-1 text-xs sm:text-sm text-gray-500 flex items-start justify-end pr-1 sm:pr-2 pt-1">1</div>
                        <div className="col-span-7 sm:col-span-9 text-xs sm:text-sm text-gray-500 flex items-start justify-start px-1 sm:px-2 pt-1">&#123;</div>
                        <div className="col-span-1 text-xs sm:text-sm text-gray-500 flex items-start justify-end pr-1 sm:pr-2 pt-1">2</div>
                        <div className="col-span-7 sm:col-span-9 text-xs sm:text-sm text-white flex items-start justify-start px-1 sm:px-2 pt-1">
                            <span className="text-blue-500">"name"</span>: <span className="text-green-400">"Burhanuddin"</span>,
                        </div>
                        <div className="col-span-1 text-xs sm:text-sm text-gray-500 flex items-start justify-end pr-1 sm:pr-2 pt-1">3</div>
                        <div className="col-span-7 sm:col-span-9 text-xs sm:text-sm text-white flex items-start justify-start px-1 sm:px-2 pt-1">
                            <span className="text-blue-500">"role"</span>: <span className="text-green-400">"Full Stack Developer"</span>,
                        </div>
                        <div className="col-span-1 text-xs sm:text-sm text-gray-500 flex items-start justify-end pr-1 sm:pr-2 pt-1">4</div>
                        <div className="col-span-7 sm:col-span-9 text-xs sm:text-sm text-white flex items-start justify-start px-1 sm:px-2 pt-1">
                            <span className="text-blue-500">"Stack"</span>: &#123;
                        </div>
                        <div className="col-span-1 text-xs sm:text-sm text-gray-500 flex items-start justify-end pr-1 sm:pr-2 pt-1">5</div>
                        <div className="col-span-7 sm:col-span-9 text-xs sm:text-sm text-white flex items-start justify-start px-2 sm:px-5 pt-1">
                            <span className="text-blue-500">"Frontend"</span>: <span className="text-green-400">"ReactJS"</span>,
                        </div>
                        <div className="col-span-1 text-xs sm:text-sm text-gray-500 flex items-start justify-end pr-1 sm:pr-2 pt-1">6</div>
                        <div className="col-span-7 sm:col-span-9 text-xs sm:text-sm text-white flex items-start justify-start px-2 sm:px-5 pt-1">
                            <span className="text-blue-500">"Backend"</span>: <span className="text-green-400">"NodeJS"</span>,
                        </div>
                        <div className="col-span-1 text-xs sm:text-sm text-gray-500 flex items-start justify-end pr-1 sm:pr-2 pt-1">7</div>
                        <div className="col-span-7 sm:col-span-9 text-xs sm:text-sm text-white flex items-start justify-start px-2 sm:px-5 pt-1">
                            <span className="text-blue-500">"Database"</span>: <span className="text-green-400">"MongoDB"</span>,
                        </div>
                        <div className="col-span-1 text-xs sm:text-sm text-gray-500 flex items-start justify-end pr-1 sm:pr-2 pt-1">8</div>
                        <div className="col-span-7 sm:col-span-9 text-xs sm:text-sm text-white flex items-start justify-start px-1 sm:px-2 pt-1">
                            &#125;  ,
                        </div>
                        <div className="col-span-1 text-xs sm:text-sm text-gray-500 flex items-start justify-end pr-1 sm:pr-2 pt-1">9</div>
                        <div className="col-span-7 sm:col-span-9 text-xs sm:text-sm text-white flex items-start justify-start px-1 sm:px-2 pt-1">
                            <span className="text-blue-500">"location"</span>: <span className="text-green-400">"Remote"</span>,
                        </div>
                        <div className="col-span-1 text-xs sm:text-sm text-gray-500 flex items-start justify-end pr-1 sm:pr-2 pt-1">10</div>
                        <div className="col-span-7 sm:col-span-9 text-xs sm:text-sm text-white flex items-start justify-start px-1 sm:px-2 pt-1">
                            <span className="text-blue-500">"Open to Work"</span>: <span className="text-purple-400">true</span>,
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Code