import Image from 'next/image';
import card3 from '../../../public/criancas.jpg'
import { Carousel } from 'react-responsive-carousel'

export default function Testimony() {
    return (
        <div>
            <div className=' flex  flex-col justify-center items-center'>
                <Image src={card3} about='foto de uma criança' className='rounded-lg w-[900px] h-[458px] lg:mt-20 lg:ml-52'/>
                <div className='bg-green1 text-yellow1 lg:w-[460px] h-[458px] lg:mr-[600px] p-10 space-y-9 rounded-lg lg:absolute'>
                    <p>Lorem, ipsum dolor sit amet...</p>
                    <h2 className='text-2xl '>Lorem, ipsum doler sit amet lorem...</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint voluptatum, est consequuntur eveniet tempore consectetur non esse quo molestias facere cum voluptatibus fuga accusantium accusamus doloribus provident.</p>
                    <button className='border border-yellow1 rounded px-5 py-2'>Ler mais</button>
                </div>

            </div>
            <div className='pt-20  flex flex-col justify-center items-center'>
                <Image src={card3} about='foto de uma criança' className='rounded-lg w-[900px] h-[458px] lg:mb-20 lg:mr-16' />
                <div className='bg-green1 text-yellow1  lg:w-[460px] h-[458px] lg:ml-[700px] p-10 space-y-9 rounded-lg lg:absolute'>
                    <p>Lorem, ipsum dolor sit amet...</p>
                    <h2 className='text-2xl '>Lorem, ipsum doler sit amet lorem...</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint voluptatum, est consequuntur eveniet tempore consectetur non esse quo molestias facere cum voluptatibus fuga accusantium accusamus doloribus provident.</p>
                    <button className='border border-zinc-400 rounded px-5 py-2'>Ler mais</button>
                </div>
            </div>
            <div className='bg-green1 mt-5'>
                <h2 className='absolute mt-16 text-center w-screen text-xl lg:text-4xl font-bold text-white'>O que os outros estão falando</h2>
                <Carousel showArrows={true} showStatus={false} interval={5000} infiniteLoop transitionTime={1100} className='text-yellow1 lg:text-2xl lg:mx-20 mt-20'>
                    <div className="h-96 lg:px-40 flex justify-center items-center px-5">
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nihil tenetur sint, commodi reprehenderit rerum veritatis, magni iusto dolorum reiciendis minus illo exercitationem vel! Nesciunt voluptatibus illum dolorum quibusdam sint.</h2>
                    </div>
                    <div className="h-96 lg:px-40 flex justify-center items-center px-5">
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nihil tenetur sint, commodi reprehenderit rerum veritatis, magni iusto dolorum reiciendis minus illo exercitationem vel! Nesciunt voluptatibus illum dolorum quibusdam sint.</h2>
                    </div>
                    <div className="h-96 lg:px-40 flex justify-center items-center px-5">
                        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nihil tenetur sint, commodi reprehenderit rerum veritatis, magni iusto dolorum reiciendis minus illo exercitationem vel! Nesciunt voluptatibus illum dolorum quibusdam sint.</h2>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}