import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center lg:flex-row pt-10 lg:py-20">
            <div className="flex flex-col w-80 lg:w-[400px] h-[450px] lg:h-[600px] bg-yellow1 rounded-lg lg:rounded-s-lg gap-2 lg:gap-10 p-10">
                <div>
                    <FontAwesomeIcon icon={faLocationDot} className='text-green1 font-bold text-4xl py-2 drop-shadow-dark1' />
                </div>
                <h2 className='text-green1 text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h2>
                <p className='text-green1'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dicta asperiores temporibus animi culpa ab,</p>
                <input type="text"
                    placeholder='Pesquisa'
                    className='p-2 rounded-lg'
                />
                <button className='text-yellow1 bg-green1 p-2 rounded-lg w-40'>
                    Pesquisa
                </button>
            </div>

            <div >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.1348248273428!2d-45.055756784785885!3d-22.117165906546504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cb4beb4d3cf3e3%3A0x66eed7ea40524126!2sShopping%20Bav%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1682620957111!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" alt='mapa'
                    className=" rounded-lg lg:rounded-e-lg w-80 lg:w-[700px] h-96 lg:h-[600px]"
                ></iframe>
            </div>
        </div>
    )
}