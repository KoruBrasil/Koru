import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
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

                <FontAwesomeIcon icon={faSearch}
                    onClick={() => setShowSidebar(!showSidebar)}
                    className=" pr-6 z-30 flex items-center cursor-pointer right-28 md:right-32 top-6 text-yellow1 h-6"
                />
            )}
            <div
                className={`top-0 right-0 w-full bg-yellow1 fixed z-40 h-52 ease-in-out duration-300 flex flex-col justify-center items-center md:justify-center md:items-center ${showSidebar ? "translate-y-0" : "-translate-y-52"
                    }`}>
                
                <input type="text"
                    placeholder='Pesquisa'
                    className='bg-purple-100 text-center rounded-full p-2 text-yellow1 border border-t border-b border-yellow1 placeholder:text-yellow1 placeholder-shown:border-yellow1 text-sm'
                />
                <h3 className="text-white text-sm pt-5">
                    Pressione &apos;Enter&apos; para pesquisar
                </h3>
            </div>
        </>
    );
};
