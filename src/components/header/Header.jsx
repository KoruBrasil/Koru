import Carrossel from './Carrossel'
import Burger from './Burger'
import Search from '../header/Search'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../../public/logo_whitebg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown} from '@fortawesome/free-solid-svg-icons'

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
          <h2 className='font-bold text-center'>
            Mantendo as famílias mais unidas
          </h2>
        </div>
        <div className='hidden lg:flex justify-center items-center  '>
          <FontAwesomeIcon icon={faSearch}

            className='bg-yellow1 bg-opacity-10 rounded-s-lg p-2 text-2xl text-yellow1' />
          <input type="text"
            placeholder='Pesquisa'
            className='bg-yellow1 bg-opacity-10 rounded-e-lg p-2 text-yellow1 border-none placeholder:text-yellow1 placeholder-shown:border-yellow1'
          />
          <button className='bg-yellow1 bg-opacity-40 hover:bg-opacity-100 transition-all duration-300 ease-in-out text-yellow1 hover:text-white rounded-full py-2 px-5 text-sm mx-2 font-bold'>
            Cadastre-se
          </button>
          <button className='bg-yellow1 hover:bg-opacity-40 hover:text-yellow1 transition-all duration-300 text-white rounded-full py-2 px-5 text-sm  font-bold'>
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
      <nav className='hidden lg:flex justify-center items-center p-5 gap-10'>
        
        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-300 rounded-full flex justify-center items-center space-x-2'>
          <p>O que fazemos?</p> 
          <FontAwesomeIcon icon={faChevronDown}/>
        </Link>
        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-300 rounded-full flex justify-center items-center space-x-2'>
           <p>Aprenda conosco</p>
          <FontAwesomeIcon icon={faChevronDown}/>
        </Link>
        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-300 rounded-full flex justify-center items-center space-x-2'>
           <p>Novidades e eventos</p>
          <FontAwesomeIcon icon={faChevronDown}/>
        </Link>
        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-300 rounded-full flex justify-center items-center space-x-2'>
           <p>Centro de recursos</p>
          <FontAwesomeIcon icon={faChevronDown}/>
        </Link>
        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-300 rounded-full flex justify-center items-center space-x-2'>
           <p>Sobre o Koru</p>
          <FontAwesomeIcon icon={faChevronDown}/>
        </Link>
        <Link href='??' className='text-yellow1 font-bold hover:bg-yellow1 hover:bg-opacity-10 px-5 py-2 transition-all duration-300 rounded-full flex justify-center items-center space-x-2'>
           <p>Contato</p>
          <FontAwesomeIcon icon={faChevronDown}/>
        </Link>
      </nav>
      <Carrossel />
    </div>
  )
}