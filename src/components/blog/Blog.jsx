import Image from 'next/image';
import criancas from '../../../public/criancas-felizes.jpg'

export default function Blog() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center w-sreen gap-5 p-10">
                <h2 className="text-4xl">
                    Lorem ipsum, dolor sit amet consectetur.
                </h2>
                <h3 className="text-xl">
                    Lorem ipsum dolor sit.
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className='flex gap-10 p-5 justify-center px-20'>
                <div className='w-80 flex flex-col overflow-hidden gap-5 '>
                    <Image src={criancas} alt='crianças'
                        className='w-80'
                    />
                    <h3 className='text-yellow1 text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                        </h3>
                    <p className='text-sm text-zinc-400'>
                        27 abril 23</p>
                    <p className='text-zinc-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, perferendis cupiditate nisi debitis vero voluptas distinctio eius officia tempora earum, voluptates saepe corporis laudantium sed. Quaerat error alias vitae!
                    </p>
                    <button className='border border-yellow1 text-yellow1 rounded-lg w-32 py-2 px-4'>
                        Ler mais
                        </button>
                </div>
                <div className='w-80 flex flex-col overflow-hidden gap-5 '>
                    <Image src={criancas} alt='crianças'
                        className='w-80'
                    />
                    <h3 className='text-yellow1 text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                        </h3>
                    <p className='text-sm text-zinc-400'>
                        27 abril 23</p>
                    <p className='text-zinc-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, perferendis cupiditate nisi debitis vero voluptas distinctio eius officia tempora earum, voluptates saepe corporis laudantium sed. Quaerat error alias vitae!
                    </p>
                    <button className='border border-yellow1 text-yellow1 rounded-lg w-32 py-2 px-4'>
                        Ler mais
                        </button>
                </div>
                <div className='w-80 flex flex-col overflow-hidden gap-5 '>
                    <Image src={criancas} alt='crianças'
                        className='w-80'
                    />
                    <h3 className='text-yellow1 text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                        </h3>
                    <p className='text-sm text-zinc-400'>
                        27 abril 23</p>
                    <p className='text-zinc-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat, perferendis cupiditate nisi debitis vero voluptas distinctio eius officia tempora earum, voluptates saepe corporis laudantium sed. Quaerat error alias vitae!
                    </p>
                    <button className='border border-yellow1 text-yellow1 rounded-lg w-32 py-2 px-4'>
                        Ler mais
                        </button>
                </div>
            </div>
        </div>
    )
}