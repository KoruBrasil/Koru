import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Carrossel from './Carrossel'
import Burger from './Burger'
import Search from './Search'
import Link from 'next/link'
export default function Header() {
    return (
        <div>
            <div
                className='flex justify-between items-center p-5'>
                <div>
                    <h1>Logo</h1>
                </div>
                <div className='flex items-center'>
                    <Search/>
                    <Burger />
                </div>
            </div>
            <nav className='flex justify-center items-center p-5 gap-10'>
               <Link href='??'>
                 Página
               </Link>
               <Link href='??'>
                 Página
               </Link>
               <Link href='??' className='bg-blue-500 rounded-xl p-1 px-5 text-white'>
                 Página
               </Link>
            </nav>
            <Carrossel />
        </div>
    )
}