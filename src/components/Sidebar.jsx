import React, { useState } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { MdDashboard } from 'react-icons/md'
import { MdSupportAgent } from "react-icons/md";
import AccountDiv from './accountDiv';

function Sidebar({show}) {
    const [current,setCurrent] = useState(1)
    return (
        <div className={`md:block ${show?'block':"hidden"} hidden bg-white h-screen shadow drop-shadow-2xl w-fit fixed`}>
            <div className="flex flex-col p-3 shadow w-60">
                <div className="space-y-3">
                    <div className=" items-center drop-shadow-2xl shadow pb-5">
                        <div className='flex justify-center'>
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='w-28' alt="" />
                        </div>
                        <div className='flex justify-center'>
                            <h1 className='text-center text-xl font-semibold flex items-center'>Ram Mohan <RiArrowRightSLine className='text-cyan-400 pt-1 ' /></h1>
                        </div>
                        <p className='text-center'>rammohan@gmail.com</p>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li onClick={()=>setCurrent(1)} className={`rounded-md ${current==1?'shadow-md drop-shadow-2xl bg-sky-500':''}`}>
                                <p
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    < MdDashboard className='text-lg' />
                                    <p className='text-lg font-medium'>Dashboard</p>
                                </p>
                            </li>
                            <li onClick={()=>setCurrent(2)} className={`rounded-md ${current==2?'shadow-md drop-shadow-2xl bg-sky-500':''}`}>
                                <p
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </svg>
                                    <p className='text-lg font-medium'>Perks</p>
                                </p>
                            </li>
                            <li onClick={()=>setCurrent(3)} className={`rounded-md ${current==3?'shadow-md drop-shadow-2xl bg-sky-500':''}`}>
                                <p
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <MdSupportAgent className='text-lg' />
                                    <p className='text-lg font-medium'>FAQ</p>
                                </p>
                            </li>
                            <li onClick={()=>setCurrent(4)} className={`rounded-md ${current==4?'shadow-md drop-shadow-2xl bg-sky-500':''}`}>
                                <p
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <p className='text-lg font-medium'>Settings</p>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           <div>
            
           <p
                className="flex items-center p-2 space-x-3 rounded-md"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                </svg>
                <p className='text-lg font-medium'>Logout</p>
            </p>
           </div>
        </div>
    )
}

export default Sidebar