import React from 'react'

function BottomCard({ offers }) {
    return (
        <div className="p-6 sm:flex bg-white border drop-shadow-2xl border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='w-1/2'>
                <p className={`bg-${offers?.color} w-20 text-center rounded-md font-thin text-xs px-1`}>{offers?.minHead}</p>
                <h1 className='font-bold text-2xl'>{offers?.head}</h1>
                <p>{offers?.description}</p>
                <button className={`flex bg-${offers.color} mt-4 inline-flex items-center px-4 py-1 rounded-md text-sm font-medium text-center`}>{offers?.buttonText} <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></button>
            </div>
            <div className='w-1/2'>
                <p className='mb-1'>What you'll get :</p>
                {offers?.offers.map(offer=>(
                    <div className='flex gap-3'><p>{offer?.icon}</p><p className='flex items-center'> {offer?.one}</p></div>
                ))}
            </div>
        </div>
    )
}

export default BottomCard