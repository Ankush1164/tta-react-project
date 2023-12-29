import React from 'react'

function Home() {
  return (
   <>
   <div className='w-full h-96 bg-slate-100 flex justify-around'>
        {/* Text container */}
        <div className='w-2/4 h-full flex justify-start'>
            <div className='w-fit h-full flex flex-col justify-center items-start gap-3 ml-10'>
                <h1 className='text-3xl font-semibold'>Hey, Ankush here...</h1>
                <p className='text-lg'>As a full-stack web developer, I'm enthusiastic about learning and building new things. I have a strong passion for exploring innovative technologies and frameworks to create fresh and impactful projects</p>
                <p className='text-md'>BCA Graduate</p>
                <button className='px-5 py-2 rounded-md font-semibold bg-blue-300'> Contact Me</button>
            </div>
        </div>

        {/* Image Container */}
        <div className='w-2/4 h-full flex justify-center items-center'>
            <div className='w-96 h-72 object-fill'>
                <img src="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGRpbmd8ZW58MHx8MHx8fDA%3D" className='w-full h-full rounded-md'/>
            </div>
        </div>
   </div>
   </>
  )
}

export default Home