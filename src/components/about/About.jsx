import Image from 'next/image';
import card from '../../../public/1.jpg'
import card2 from '../../../public/2.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex flex-col justify-center items-center text-center pt-20 px-5 md:px-20 gap-5'>
                <h2 className='text-xl tracking-wide text-green1'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <h2 className='text-5xl font-bold tracking-wide text-green1'>Lorem ipsum dolor sit</h2>
                <p className='text-xl tracking-wide leading-10 text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid excepturi beatae, molestias animi atque dicta voluptatum in eligendi ipsa? Ipsam eum sapiente beatae voluptates sed ad nihil minima labore facilis.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:flex justify-center items-center py-20 gap-6">

                <div className="w-80 lg:w-64 h-[420px] rounded-lg flex justify-center items-end overflow-hidden">

                    <Image src={card} alt='card'
                        className='h-full hover:scale-125 transition-all duration-2000 rounded-lg'
                    />
                    <div className='absolute p-4 z-10'>
                        <FontAwesomeIcon icon={faHandshake} className='text-green1 font-bold text-4xl drop-shadow-dark1 py-2' />
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
                        <FontAwesomeIcon icon={faHandshake} className='text-green1 font-bold text-4xl drop-shadow-dark1 py-2' />
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
                        <FontAwesomeIcon icon={faHandshake} className='text-green1 font-bold text-4xl drop-shadow-dark1 py-2' />
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
                        <FontAwesomeIcon icon={faHandshake} className='text-green1 font-bold text-4xl drop-shadow-dark1 py-2' />
                        <p className="drop-shadow-dark1 text-white  w-48 tracking-wide py-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p className="drop-shadow-dark1 text-white font-bold text-2xl tracking-wide">
                            Informações
                        </p>
                    </div>

                </div>
            </div>
            <div className='pt-20'>
                <h2 className="tracking-wide text-center px-5 py-20 lg:px-44 leading-loose text-2xl text-zinc-700">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur in accusantium minima sint id dicta eligendi quos. Quo delectus autem minus fugiat quis, pariatur debitis odit aliquam. Laborum, blanditiis fuga!
                </h2>
                <div className='grid justify-center items-center md:grid-cols-2 lg:grid-cols-5 lg:p-20 gap-5'>
                    <div className="w-80 lg:w-60 flex justify-center items-end overflow-hidden">
                        <div className='flex flex-col justify-center items-center'>
                            <Image src={card2} about='imagem ' />
                            <h2 className='text-5xl text-green1'>400+</h2>
                            <p className=''>centres</p>
                        </div>
                    </div>
                    <div className="w-80 lg:w-60 rounded-lg flex justify-center items-end overflow-hidden">
                        <div className='flex flex-col justify-center items-center'>
                            <Image src={card2} about='imagem ' />
                            <h2 className='text-5xl text-green1'>400+</h2>
                            <p className=''>centres</p>
                        </div>
                    </div>
                    <div className="w-80 lg:w-60 rounded-lg flex justify-center items-end overflow-hidden">
                        <div className='flex flex-col justify-center items-center'>
                            <Image src={card2} about='imagem ' />
                            <h2 className='text-5xl text-green1'>400+</h2>
                            <p className=''>centres</p>
                        </div>
                    </div>
                    <div className="w-80 lg:w-60 rounded-lg flex justify-center items-end overflow-hidden">
                        <div className='flex flex-col justify-center items-center'>
                            <Image src={card2} about='imagem ' />
                            <h2 className='text-5xl text-green1'>400+</h2>
                            <p className=''>centres</p>
                        </div>
                    </div>
                    <div className="w-80 lg:w-60 rounded-lg flex justify-center items-end overflow-hidden">
                        <div className='flex flex-col justify-center items-center'>
                            <Image src={card2} about='imagem ' />
                            <h2 className='text-5xl text-green1'>400+</h2>
                            <p className=''>centres</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}