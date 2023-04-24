import Image from 'next/image';
import card from '../../../public/1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex flex-col justify-center items-center text-center py-20 px-5 md:px-20 gap-5'>
                <h2 className='text-xl tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <h2 className='text-5xl font-bold tracking-wide'>Lorem ipsum dolor sit</h2>
                <p className='text-xl tracking-wide leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid excepturi beatae, molestias animi atque dicta voluptatum in eligendi ipsa? Ipsam eum sapiente beatae voluptates sed ad nihil minima labore facilis.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:flex gap-5 justify-center items-center py-20">

                <div className="w-80 lg:w-64 h-[420px] rounded-lg flex justify-center items-end overflow-hidden">

                    <Image src={card} alt='card'
                        className='h-full hover:scale-125 transition-all duration-2000 rounded-lg'
                    />
                    <div className='absolute p-4 z-10'>
                        <FontAwesomeIcon icon={faHandshake} className='text-yellow-500 font-bold text-4xl drop-shadow-dark1 py-2'/>
                        <p className="drop-shadow-dark1 text-white  w-48 tracking-wide py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p className="drop-shadow-dark1 text-white font-bold text-2xl tracking-wide">
                            Informações
                        </p>
                    </div>

                </div>
                <div className="w-80 lg:w-64 h-[420px] rounded-lg flex justify-center items-end overflow-hidden">

                    <Image src={card} alt='card'
                        className='h-full hover:scale-125 transition-all duration-2000 rounded-lg'
                    />
                    <div className='absolute p-4 z-10'>
                        <FontAwesomeIcon icon={faHandshake} className='text-yellow-500 font-bold text-4xl drop-shadow-dark1 py-2'/>
                        <p className="drop-shadow-dark1 text-white  w-48 tracking-wide py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p className="drop-shadow-dark1 text-white font-bold text-2xl tracking-wide">
                            Informações
                        </p>
                    </div>

                </div>
                <div className="w-80 lg:w-64 h-[420px] rounded-lg flex justify-center items-end overflow-hidden">

                    <Image src={card} alt='card'
                        className='h-full hover:scale-125 transition-all duration-2000 rounded-lg'
                    />
                    <div className='absolute p-4 z-10'>
                        <FontAwesomeIcon icon={faHandshake} className='text-yellow-500 font-bold text-4xl drop-shadow-dark1 py-2'/>
                        <p className="drop-shadow-dark1 text-white  w-48 tracking-wide py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p className="drop-shadow-dark1 text-white font-bold text-2xl tracking-wide">
                            Informações
                        </p>
                    </div>

                </div>
                <div className="w-80 lg:w-64 h-[420px] rounded-lg flex justify-center items-end overflow-hidden">

                    <Image src={card} alt='card'
                        className='h-full hover:scale-125 transition-all duration-2000 rounded-lg'
                    />
                    <div className='absolute p-4 z-10'>
                        <FontAwesomeIcon icon={faHandshake} className='text-yellow-500 font-bold text-4xl drop-shadow-dark1 py-2'/>
                        <p className="drop-shadow-dark1 text-white  w-48 tracking-wide py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <p className="drop-shadow-dark1 text-white font-bold text-2xl tracking-wide">
                            Informações
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}