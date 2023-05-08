import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carro1 from '../../../public/carro1.jpeg'
import carro2 from '../../../public/carro2.jpeg'
import carro3 from '../../../public/carro3.jpeg'
import Image from 'next/image';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel showArrows={false} showStatus={false} autoPlay animationHandler='fade' interval={5000} infiniteLoop transitionTime={1100}>
                    <div className="h-[400px]">
                        <Image src={carro1} alt="garotinho"
                            className='w-full h-full' />
                    </div>
                    <div className="h-[400px]">
                        <Image src={carro2} alt="garotinhos "
                            className='w-full h-full'
                        />
                    </div>
                    <div className="h-[400px]">
                        <Image src={carro3} alt="garoto"
                            className='w-full h-full'
                        />
                    </div>
                </Carousel>
            </div>
        );
    }
}