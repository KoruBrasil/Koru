import { useState } from "react";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="z-30 flex items-center cursor-pointer right-10 top-6"
                    fill="#52AAB1"
                    viewBox="0 0 100 80"
                    width="30"
                    height="30"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}

            <div
                className={`top-0 right-0 w-full md:w-[30vw] bg-blue-600 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <h3 className=" mt-20 text-sm font-semibold text-white p-2 pl-5 hover:text-zinc-400 ease-in-out duration-300 cursor-pointer shadow-lg">
                    I am a sidebar
                </h3>
                <h3 className="text-sm font-semibold text-white p-2 pl-5 hover:text-zinc-400 ease-in-out duration-300 cursor-pointer shadow-lg">
                    I am a sidebar
                </h3>
                <h3 className="text-sm font-semibold text-white p-2 pl-5 hover:text-zinc-400 ease-in-out duration-300 cursor-pointer shadow-lg">
                    I am a sidebar
                </h3>
                <h3 className="text-sm font-semibold text-white p-2 pl-5 hover:text-zinc-400 ease-in-out duration-300 cursor-pointer shadow-lg">
                    I am a sidebar
                </h3>
            </div>
        </>
    );
};

