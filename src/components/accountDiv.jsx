import React from 'react'
import { FaChevronDown } from "react-icons/fa";

function AccountDiv() {
  return (
    <div className='w-full flex justify-end absolute sm:me-4 md:me-10'> 
      <div className='relative top-9 end-1 md:end-28 flex gap-2'>
    <p className='bg-white rounded-md shadow shadow-zinc-500 border-spacing-3 w-52 h-12 text-center'><div className='flex justify-between m-auto px-3'><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='w-9 mt-2' alt="" /><p className='mt-3 text-center font-semibold text-xs'>XYZ Enterprises Pvt.Ltd</p></div></p>
    <p className='bg-white rounded-md border-spacing-3 w-12 shadow shadow-zinc-500 h-12 text-center pt-4 ps-4'><FaChevronDown /></p>
      </div>
    </div>
  )
}

export default AccountDiv