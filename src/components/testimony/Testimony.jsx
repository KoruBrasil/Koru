import Image from 'next/image';
import card3 from '../../../public/criancas.jpg'
export default function Testimony() {
    return (
        <div>
            <div className='pt-20  flex justify-center items-center'>
                <div className='bg-blue-700 text-white w-[460px] h-[458px] mr-[600px] p-10 space-y-9 rounded-lg absolute'>
                    <p>Lorem, ipsum dolor sit amet...</p>
                    <h2 className='text-2xl '>Lorem, ipsum doler sit amet lorem...</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint voluptatum, est consequuntur eveniet tempore consectetur non esse quo molestias facere cum voluptatibus fuga accusantium accusamus doloribus provident.</p>
                    <button className='border border-zinc-400 rounded px-5 py-2'>Ler mais</button>
                </div>
                <Image src={card3} about='foto de uma criança' className='rounded-lg w-[1000px] h-[458px] mt-20 ml-52' />
            </div>
            <div className='pt-20  flex justify-center items-center'>
                <div className='bg-blue-700 text-white w-[460px] h-[458px] ml-[600px] p-10 space-y-9 rounded-lg absolute'>
                    <p>Lorem, ipsum dolor sit amet...</p>
                    <h2 className='text-2xl '>Lorem, ipsum doler sit amet lorem...</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint voluptatum, est consequuntur eveniet tempore consectetur non esse quo molestias facere cum voluptatibus fuga accusantium accusamus doloribus provident.</p>
                    <button className='border border-zinc-400 rounded px-5 py-2'>Ler mais</button>
                </div>
                <Image src={card3} about='foto de uma criança' className='rounded-lg w-[1000px] h-[458px] mt-20 mr-52' />
            </div>
        </div>
    )
}