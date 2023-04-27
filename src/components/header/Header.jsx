import Carrossel from './Carrossel'
import Burger from './Burger'
import Search from '../header/Search'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/logo_whitebg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div>
      <div
        className='flex justify-between items-center p-5 lg:shadow '>
        <div className='px-2 rounded-full '>
          <Image src={logo} alt='logo da empresa'
            width={80}
            className='drop-shadow-sm'
          />
        </div>
        <div className='hidden lg:flex justify-center items-center '>
          <button className='bg-yellow1 text-green1 rounded-2xl py-1 px-5 text-xl mx-5'>
            Página
          </button>
          <button className='bg-yellow1 text-green1 rounded-2xl py-1 px-5 text-xl mx-5'>
            Página
            </button>
            <FontAwesomeIcon icon={faSearch}
            
            className='bg-green1 rounded-s-lg p-2 text-2xl text-yellow1'/>
             <input type="text" 
             placeholder='Pesquisa'
             className='bg-green1 rounded-e-lg p-2 text-white border-none'  
             />
            
          <button className='bg-yellow1 text-green1 rounded-2xl py-1 px-5 text-xl mx-5'>Página</button>
        </div>
        <div className='flex items-center lg:hidden '>
          <Search />
          <Burger />
        </div>
      </div>
      <nav className='flex justify-center items-center pb-5 gap-2 lg:hidden'>
        <Link href='??' className='bg-yellow1 text-green1 rounded-xl p-1 px-5'>
          Página
        </Link>
        <Link href='??' className='bg-yellow1 text-green1 rounded-xl p-1 px-5 '>
          Página
        </Link>
        <Link href='??' className='bg-green1 rounded-xl p-1 px-5 text-yellow1 '>
          Página
        </Link>
      </nav>
      <nav className='hidden lg:flex justify-center items-center p-5 gap-20'>
        <Link href='??' className='text-green1'>
          Página
        </Link>
        <Link href='??' className='text-green1'>
          Página
        </Link>
        <Link href='??' className='text-green1'>
          Página
        </Link>
        <Link href='??' className='text-green1'>
          Página
        </Link>
        <Link href='??' className='text-green1'>
          Página
        </Link>
        <Link href='??' className='text-green1'>
          Página
        </Link>
        
      </nav>
      <Carrossel />
    </div>
  )
}