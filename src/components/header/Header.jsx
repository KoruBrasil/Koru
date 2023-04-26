import Carrossel from './Carrossel'
import Burger from './Burger'
import Search from '../header/Search'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/logo_whitebg.png'

export default function Header() {
    return (
        <div>
            <div
                className='flex justify-between items-center p-5'>
                <div className='px-10 rounded-full'>
                    <Image src={logo} alt='logo da empresa' 
                    width={100}
                    className='drop-shadow-sm'
                    />
                </div>
                <div className='flex items-center'>
                    <Search/>
                    <Burger />
                </div>
            </div>
            <nav className='flex justify-center items-center p-5 gap-10'>
               <Link href='??' className='bg-yellow1 text-green1 rounded-xl p-1 px-5 '>
                 Página
               </Link>
               <Link href='??' className='bg-yellow1 text-green1 rounded-xl p-1 px-5'>
                 Página
               </Link>
               <Link href='??' className='bg-green1 rounded-xl p-1 px-5 text-yellow1'>
                 Página
               </Link>
            </nav>
            <Carrossel />
        </div>
    )
}