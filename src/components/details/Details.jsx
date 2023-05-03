import Image from 'next/image';
import criancas from '../../../public/criancas-juntas.jpg'

export default function Details() {
    return (
        <div className="grid lg:grid-cols-2 py-20">
            <div className='flex justify-center pb-10 lg:justify-end items-center'>
                <Image src={criancas} alt='crianças juntas'
                    className='w-96 h-96 lg:pr-10'
                />
            </div>
            <div className="flex flex-col text-center lg:text-start lg:w-[650px] px-10 lg:pl-10 lg:pr-20 ">
                <h2 className="text-4xl text-green1 pb-5 font-bold">
                    Lorem ipsum dolor sit amet consectetur
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium quae autem temporibus nesciunt distinctio ipsam quisquam saepe hic vitae adipisci, repellendus ipsa velit.<br />
                    Fugiat minus dolorem explicabo aperiam blanditiis!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                    Ea ipsa atque rerum voluptas architecto veniam doloremque expedita iure laborum ad totam ab eos, ducimus quia deleniti dignissimos, quisquam maiores similique.
                </p>
            </div>
        </div>
    )
}