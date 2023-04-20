import Image from 'next/image';
import card from '../../../public/card.jpeg'

export default function About() {
    return (
        <div className="flex justify-center items-center mt">
            <div className="grid grid-cols-2 gap-5 justify-center items-center">
            <div className="w-[450px] h-52 rounded-lg flex items-end justify-center overflow-hidden">
                    <Image src={card} alt='card'
                    className='h-full hover:scale-125 transition-all duration-2000 rounded-lg'
                    />
                    <p className="drop-shadow-dark1 text-white font-bold text-2xl z-10 absolute p-4">
                        Informações
                    </p>
                </div>
                <div className="w-[450px] h-52 rounded-lg flex items-end justify-center overflow-hidden">
                    <Image src={card} alt='card'
                    className='h-full hover:scale-125 transition-all duration-2000 rounded-lg'
                    />
                    <p className="drop-shadow-dark1 text-white font-bold text-2xl z-10 absolute p-4">
                        Informações
                    </p>
                </div>
                <div className="w-[450px] h-52 rounded-lg flex items-end justify-center overflow-hidden">
                    <Image src={card} alt='card'
                    className='h-full hover:scale-125 transition-all duration-2000 rounded-lg'
                    />
                    <p className="drop-shadow-dark1 text-white font-bold text-2xl z-10 absolute p-4">
                        Informações
                    </p>
                </div>
                <div className="w-[450px] h-52 rounded-lg flex items-end justify-center overflow-hidden">
                    <Image src={card} alt='card'
                    className='h-full hover:scale-125 transition-all duration-2000 rounded-lg'
                    />
                    <p className="drop-shadow-dark1 text-white font-bold text-2xl z-10 absolute p-4">
                        Informações
                    </p>
                </div>
            </div>
        </div>
    )
}