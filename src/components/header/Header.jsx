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
        className='flex justify-between items-center p-5 lg:shadow lg:shadow-yellow1 border-t-4 border-yellow1 '>
        <div className='px-2 rounded-full'>
          <Image src={logo} alt='logo da empresa'
            width={80}
            className=' '
          />
        </div>
        <div>
          <h2 className='font-bold'>
            Mantendo as famílias mais unidas
          </h2>
        </div>
        <div className='hidden lg:flex justify-center items-center '>
          <FontAwesomeIcon icon={faSearch}

            className='bg-yellow1 bg-opacity-40 rounded-s-lg p-2 text-2xl text-white' />
          <input type="text"
            placeholder='Pesquisa'
            className='bg-yellow1 bg-opacity-40 rounded-e-lg p-2 text-white border-none'
          />
          <button className='bg-yellow1 bg-opacity-40 hover:bg-opacity-100 transition-all duration-300 ease-in-out text-yellow1 hover:text-white rounded-full py-2 px-5 text-lg mx-2 font-bold'>
            Cadastre-se
          </button>
          <button className='bg-yellow1 hover:bg-opacity-40 hover:text-yellow1 transition-all duration-300 text-white rounded-full py-2 px-5 text-lg  font-bold'>
            Login
          </button>
        </div>
        <div className='flex items-center lg:hidden '>
          <Search />
          <Burger />
        </div>
      </div>
      <nav className='flex justify-center items-center pb-5 gap-2 lg:hidden'>
        <Link href='??' className='bg-yellow1 text-white rounded-xl p-1 px-5'>
          Página
        </Link>
        <Link href='??' className='bg-yellow1 text-white rounded-xl p-1 px-5 '>
          Página
        </Link>
        <Link href='??' className='bg-green1 rounded-xl p-1 px-5 text-yellow1 '>
          Página
        </Link>
      </nav>
      <nav className='hidden lg:flex justify-center items-center p-5 gap-20 '>
        
        <Link href='??' className='text-yellow1 font-bold'>
          O que fazemos?
        </Link>
        <Link href='??' className='text-yellow1 font-bold'>
          Aprenda conosco
        </Link>
        <Link href='??' className='text-yellow1 font-bold'>
          Novidades e eventos
        </Link>
        <Link href='??' className='text-yellow1 font-bold'>
          Centro de recursos
        </Link>
        <Link href='??' className='text-yellow1 font-bold'>
          Sobre o Koru
        </Link>
        <Link href='??' className='text-yellow1 font-bold'>
          Contato
        </Link>
      </nav>
      <Carrossel />
    </div>
  )
}