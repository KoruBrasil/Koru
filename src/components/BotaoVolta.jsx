import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
export default function BotaoVolta() {
    return (
        <div>
            <a href="#inicio" className='fixed bottom-2 right-5 text-yellow1 hover:text-purple-300 transition ease-in-out duration-300 rounded-full md:z-10'>
                <FontAwesomeIcon icon={faArrowAltCircleUp} className=' h-14 hover:bg-yellow1 rounded-full transition ease-in-out duration-300'/>
            </a>
        </div>
    )
}