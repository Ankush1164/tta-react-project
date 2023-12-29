import React from 'react'

function Footer() {
    return (
        <>
            <div className='h-44 w-full bg-slate-200 flex justify-around items-center p-2'>
                {/* Link box one */}
                <div className='w-56 h-full flex-col flex gap-1'>
                    <h1 className='text-lg font-semibold font-mono'>Footer Links</h1>
                    <ul className='flex flex-col gap-2 ml-1 font-semibold text-blue-700'>
                        <li>Link1</li>
                        <li>Link2</li>
                        <li>Link3</li>
                        <li>Link4</li>
                    </ul>
                </div>
                {/* Link box two */}
                <div className='w-56 h-full flex-col flex gap-2'>
                <ul className='flex flex-col gap-2 ml-1 font-semibold text-blue-700 mt-8'>
                        <li>Link1</li>
                        <li>Link2</li>
                        <li>Link3</li>
                        <li>Link4</li>
                    </ul>
                </div>
                {/* Link Box three */}
                <div className='w-56 h-full flex-col flex gap-2'>
                <ul className='flex flex-col gap-2 ml-1 font-semibold text-blue-700 mt-8'>
                        <li>Link1</li>
                        <li>Link2</li>
                        <li>Link3</li>
                        <li>Link4</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer