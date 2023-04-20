import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import garotinho from '../../public/gatorinho.jpg'
import boy from '../../public/boy.jpg'
import Image from 'next/image';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className='h-56'>
                <Carousel showArrows={true} showStatus={false} autoPlay animationHandler='fade' interval={5000} infiniteLoop transitionTime={1100}>
                    <div className="h-[300px]">
                        <Image src={garotinho} alt="garotinho"
                            className='w-full h-full' />
                    </div>
                    <div className="h-[300px]">
                        <Image src={boy} alt="garotinho "
                            className='w-full h-full'
                        />
                    </div>
                    <div className="h-[300px]">
                        <Image src={garotinho} alt="garotinho "
                            className='w-full h-full'
                        />
                    </div>
                </Carousel>
            </div>
        );
    }
}