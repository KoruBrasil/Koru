import Carrossel from './Carrossel'
import Burger from './Burger'
import Search from '../header/Search'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/logo_whitebg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div>
      <div
        className='flex justify-between items-center p-5 lg:shadow-lg lg:shadow-purple-100 border-t-4 border-yellow1 '>
        <div className='px-2 rounded-full'>
          <Link href='/'>
            <Image src={logo} alt='logo da empresa'
              width={80} />
          </Link>
        </div>
        <div>
          <h2 className='font-bold text-center hidden md:block'>
            Mantendo as famílias mais unidas
          </h2>
        </div>
        <div className='hidden lg:flex justify-center items-center relative'>
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon icon={faSearch}
              className='text-xl text-yellow1' />
          </div>

          <input type="text"
            placeholder='Pesquisa'
            className='bg-yellow1 bg-opacity-10 rounded-full p-2 text-yellow1 border border-t border-b border-yellow1 placeholder:text-yellow1 placeholder-shown:border-yellow1 text-sm pl-10 '
          />
          <button className='bg-yellow1 bg-opacity-40 hover:bg-opacity-100 text-yellow1 hover:text-white rounded-full py-2 px-5 text-sm mx-2 font-bold transition-all ease-in-out duration-500'>
            Cadastre-se
          </button>
          <button className='bg-yellow1 hover:bg-opacity-40 hover:text-yellow1  text-white rounded-full py-2 px-5 text-sm font-bold transition-all ease-in-out duration-500'>
            Login
          </button>
        </div>
        <div className='flex items-center lg:hidden '>
          <Search />
          <Burger />
        </div>
      </div>
      <nav className='flex justify-center items-center pb-5 gap-2 lg:hidden'>
        <button type='button' className='bg-yellow1 bg-opacity-40 hover:bg-opacity-100  duration-500 ease-in-out text-yellow1 hover:text-white rounded-full py-2 px-5 text-sm mx-2 font-bold'>
          Cadastre-se
        </button>
        <button className='bg-yellow1 hover:bg-opacity-40 hover:text-yellow1 transition-all duration-500 text-white rounded-full py-2 px-5 text-sm  font-bold'>
          Login
        </button>
      </nav>
      <nav className='hidden lg:flex justify-center items-center p-5 gap-10'>

        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-500 rounded-full flex justify-center items-center space-x-2'>
          <p>O que fazemos?</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-500 rounded-full flex justify-center items-center space-x-2'>
          <p>Aprenda conosco</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-500 rounded-full flex justify-center items-center space-x-2'>
          <p>Novidades e eventos</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-500 rounded-full flex justify-center items-center space-x-2'>
          <p>Centro de recursos</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-500 rounded-full flex justify-center items-center space-x-2'>
          <p>Sobre o Koru</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
        <Link href='/contato' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-500 rounded-full flex justify-center items-center space-x-2'>
          <p>Contato</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </Link>
      </nav>

    </div>
  )
}