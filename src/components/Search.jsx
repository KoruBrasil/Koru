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
                    className="fixed  z-30 flex items-center cursor-pointer right-40 top-6 text-blue-600 h-8"
                />
            )}

            <div
                className={`top-0 right-0 w-full md:w-full bg-blue-600 fixed z-40 h-36 ease-in-out duration-300 flex flex-col justify-center items-center ${showSidebar ? "translate-y-0" : "-translate-y-40"
                    }`}>
                <input type="text"
                    placeholder="Pesquisa"
                    className="bg-zinc-300 rounded-xl p-2"
                />
                <h3 className="text-white text-sm">
                    Pressione 'Enter' para pesquisar
                </h3>
            </div>
        </>
    );
};
