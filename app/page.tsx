import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(/main-bg.webp)"}}>
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <h1 className='text-[50px] text-white font-semibold'>
            Dreams becomes reality with{" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
               Web development
            </span>
          </h1>
          <p className='text-gray-200 hidden md:block'>

          Hello, I'm Hadj, a proficient front-end web developer specializing in JavaScript frameworks and currently advancing my skills with a computer science training. My focus is on creating seamless and user-friendly web experiences, backed by a strong foundation in HTML, CSS, and JavaScript. Through collaboration on team projects and personal endeavors, I've honed my abilities. If you're in search of a dedicated web developer committed to continuous learning and delivering top-notch results, let's connect on LinkedIn. I'm excited about the opportunity to contribute my skills to your projects and bring innovative web solutions to life.</p>
                    <div className='flex-col md:flex-row hidden md:flex gap-5'>
            <Link href='/my-skills' className=' relative rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Learn More
            </Link>
            <Link href='/my-projects' className='relative rounded-[20px] border border-white group bg-transparent hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20' />
              My projects
            </Link>
            <Link href='/contact-me' className='relative rounded-[20px] border border-white group bg-transparent hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] inset-0 opacity-0 group-hover:opacity-20' />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className='absolute bottom-10 z-[20] flex right-5 flex-col md:hidden gap-5'>
            <Link href='/my-skills' className='rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]'>
              Learn More
            </Link>
            <Link href='/my-projects' className='rounded-[20px] group bg-transparent border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              My projects
            </Link>
            <Link href='/contact-me' className='rounded-[20px] group bg-transparent border border-white hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Contact me
            </Link>
          </div>
          <Image
              src='/horse.png'
              alt='horse'
              height={300}
              width={300}
              className='absolute right-40 top-40' 
            />
            <Image
              src='/cliff.webp'
              alt='cliff'
              height={480}
              width={450}
              className='absolute right-0 top-7' 
             
            />
          <div className='absolute bottom-0 z-[5] w-full h-full auto'>
            <Image
              src='/trees.webp'
              alt='trees'
              height={2000}
              width={2000}
              className='w-full h-full'/>
          </div>

          <Image
              src='/stars.png'
              alt='stars'
              height={300}
              width={300}
              className='absolute top-10 left-0 z-[10]' 
            />
    </main>
  )
}
