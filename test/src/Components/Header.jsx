import React from 'react'

function Header() {
  return (
    <>
         <header className='w-full bg-slate-200 h-14 flex justify-between items-center px-5 py-2'>
      {/* Header logo/text */}
      <div className='p-1 w-52'>
        <p className='text-red-400 font-semibold text-xl'>Wel<span className='text-green-500'>come</span></p>
      </div>
      {/* Header Links */}
      <div className='w-fit flex items-center'>
        <ul className='flex gap-5 mr-5'>
          <li>Home</li>
          <li>Contact Us</li>
        </ul>
        <button className='px-5 py-1.5 rounded-md bg-slate-400 shadow-md font-semibold'>Login</button>
      </div>
     </header>
    </>
  )
}

export default Header