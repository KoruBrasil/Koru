import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carro1 from '../../../public/carro1.jpeg'
import carro2 from '../../../public/carro2.jpeg'
import carro3 from '../../../public/carro3.jpeg'
import carro11 from '../../../public/carro11.jpeg'
import carro22 from '../../../public/carro22.jpeg'
import carro33 from '../../../public/carro33.jpeg'
import Image from 'next/image';


export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>

                <Carousel showArrows={false} showStatus={false} autoPlay animationHandler='fade' interval={5000} infiniteLoop transitionTime={1100}>
                    <div className="h-auto">
                        <div className='h-full absolute z-50 text-white space-y-10 lg:pl-40 flex flex-col justify-center items-start p-5'>
                            <h2 className='text-3xl md:text-7xl drop-shadow-dark1'>
                                Keeping families together
                            </h2>
                            <p className='text-xl drop-shadow-dark1'>
                                Experience early childhood education with a difference; children and their families play and grow together.
                            </p>


                        </div>
                        <div className='hidden lg:block'>
                            <Image src={carro1} alt="garotinho"
                                className='w-full h-auto'/>
                        </div>
                        <div className='block lg:hidden'>
                            <Image src={carro11} alt="garotinho"
                                className='w-full h-auto'/>
                        </div>
                        
                    </div>
                    <div className="h-auto">
                        <div className='h-full absolute z-50 text-white space-y-10 lg:pl-40 flex flex-col justify-center items-start p-5'>
                            <h2 className='text-3xl md:text-7xl drop-shadow-dark1'>
                                Keeping families together
                            </h2>
                            <p className='text-xl drop-shadow-dark1'>
                                Experience early childhood education with a difference; children and their families play and grow together.
                            </p>


                        </div>
                        <div className='hidden lg:block'>
                            <Image src={carro2} alt="garotinho"
                                className='w-full h-auto'/>
                        </div>
                        <div className='block lg:hidden'>
                            <Image src={carro22} alt="garotinho"
                                className='w-full h-auto'/>
                        </div>
                    </div>
                    <div className="h-auto">
                        <div className='h-full absolute z-50 text-white space-y-10 lg:pl-40 flex flex-col justify-center items-start p-5'>
                            <h2 className='text-3xl md:text-7xl drop-shadow-dark1'>
                                Keeping families together
                            </h2>
                            <p className='text-xl drop-shadow-dark1'>
                                Experience early childhood education with a difference; children and their families play and grow together.
                            </p>

                        </div>
                        <div className='hidden lg:block'>
                            <Image src={carro3} alt="garotinho"
                                className='w-full h-auto'/>
                        </div>
                        <div className='block lg:hidden'>
                            <Image src={carro33} alt="garotinho"
                                className='w-full h-auto'/>
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}