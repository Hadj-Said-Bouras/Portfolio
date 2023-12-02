import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'

function Navbar() {
  return (
    <div className='fixed top-o z-[40] w-full h-[100px]  flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-3 items-center'>
            <div className="relative">
            </div>
            <a href='/'>
            <h1 className='text-black text-[25px] font-semibold bg-white p-2 rounded-3xl'>Hadj Said {" "}<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
        Bouras
            </span> </h1>
            </a>

        </div>
        <div className='flex flex-row gap-5 mb-2 bg-white p-2 rounded-3xl'>
            {Socials.map((social) => (
                <a target="_blank" href={social.href}>
                <Image 
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    width={35}
                    height={35}
                />
                </a>

            ))}
        </div>
    </div>
  )
}

export default Navbar