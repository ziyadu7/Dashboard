import React from 'react'
import { IoMdArrowDropright} from 'react-icons/io'

function PlanCard({ plan }) {
    return (
        <div className="p-6 bg-white border drop-shadow-2xl border-gray-200 overflow-hidden rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{plan?.plan}</h5>
            <p className='text-slate-600 line-through'>${plan?.price}/mo</p>
            <p className='text-slate-600 text-xl font-medium'>${plan?.discPrice}/mo</p>
            <button className={`flex bg-${plan.color} inline-flex items-center px-4 py-1 rounded-md text-sm font-medium text-center`}>Get Started <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg></button>
            <hr className='h-px my-8 bg-gray-900 border-2' />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">What you'll get :</p>
            <p className='flex items-center gap-3'>{plan?.icon1} {plan?.offer1}</p>
            <p className='flex items-center gap-3'>{plan?.icon2}  {plan?.offer2}</p>
            <p className='flex items-center gap-3'>{plan?.icon3}  {plan?.offer3}</p>
            <p className='flex items-center gap-2 font-medium underline mt-3'>EXPLORE FEATURES<IoMdArrowDropright/></p>
        </div>

    )
}

export default PlanCard