
import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

export default function Page() {
  return (
    <div 
    className='w-screen h-screen flex items-center justify-center bg-center bg-cover'
    style={{ backgroundSize: "800px",backgroundColor: "black", backgroundRepeat: "no-repeat"}}
    >
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        {Projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            text={project.text}
            image={project.src} />
        ))}
      </div>
    </div>
  )
}
