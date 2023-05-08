import Image from 'next/image';
import logo from '../../../public/logo_darkbg.png'

export default function Footer(){
    return(
        <div className='bg-yellow1 p-20'>
            <Image src={logo} alt='logo da empresa'
              width={80} 
              className='drop-shadow-dark1'
              />
        </div>
    )
}