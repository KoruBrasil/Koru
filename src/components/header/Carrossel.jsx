import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carro1 from '../../../public/carro1.jpeg'
import carro2 from '../../../public/carro2.jpeg'
import carro3 from '../../../public/carro3.jpeg'
import Image from 'next/image';
import Link from 'next/link';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>

                <Carousel showArrows={false} showStatus={false} autoPlay animationHandler='fade' interval={5000} infiniteLoop transitionTime={1100}>
                    <div className="h-auto">
                        <div className='h-full absolute z-50 text-white space-y-10 pl-40 flex flex-col justify-center items-start'>
                            <h2 className='text-7xl drop-shadow-dark1'>
                                Keeping families together
                            </h2>
                            <p className='text-xl drop-shadow-dark1'>
                                Experience early childhood education with a difference; children and their families play and grow together.
                            </p>
                            <Link href='/contato' className='bg-yellow1 hover:bg-opacity-10 border border-yellow1 text-white z-50 rounded-full py-2 px-5 text-sm mx-2 font-bold transition-all ease-in-out duration-500'>
                                Clique aqui
                            </Link>

                        </div>

                        <Image src={carro1} alt="garotinho"
                            className='w-full h-auto' />

                    </div>
                    <div className="h-auto">
                        <div className='h-full absolute z-50 text-white space-y-10 pl-40 flex flex-col justify-center items-start'>
                            <h2 className='text-7xl drop-shadow-dark1'>
                                Keeping families together
                            </h2>
                            <p className='text-xl drop-shadow-dark1'>
                                Experience early childhood education with a difference; children and their families play and grow together.
                            </p>
                            <Link href='/contato' className='bg-yellow1 hover:bg-opacity-10 border border-yellow1 text-white z-50 rounded-full py-2 px-5 text-sm mx-2 font-bold transition-all ease-in-out duration-500'>
                                Clique aqui
                            </Link>

                        </div>
                        <Image src={carro2} alt="garotinhos "
                            className='w-full h-auto'
                        />
                    </div>
                    <div className="h-auto">
                        <div className='h-full absolute z-50 text-white space-y-10 pl-40 flex flex-col justify-center items-start'>
                            <h2 className='text-7xl drop-shadow-dark1'>
                                Keeping families together
                            </h2>
                            <p className='text-xl drop-shadow-dark1'>
                                Experience early childhood education with a difference; children and their families play and grow together.
                            </p>
                            <Link href='/contato' className='bg-yellow1 hover:bg-opacity-10 border border-yellow1 text-white rounded-full py-2 px-5 text-sm mx-2 font-bold transition-all ease-in-out duration-500 '>
                                Clique aqui
                            </Link>
                        </div>
                        <Image src={carro3} alt="garoto"
                            className='w-full h-auto'
                        />
                    </div>
                </Carousel>
            </div>
        );
    }
}