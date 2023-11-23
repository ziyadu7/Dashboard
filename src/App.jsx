import { useState } from 'react'
import Sidebar from './components/Sidebar'
import PlanCard from './components/planCard'

function App() {

  const plans = [
    {
      plan:'Basic',
      price:'89.99',
      discPrice:'9.99',
      offer1:"Upto 25 Users",
      offer2:"Upto 25gb Storage",
      offer3:"Email Support",
      color:'amber-200'
    },
    {
      plan:'Standard',
      price:'189.99',
      discPrice:'99.99',
      offer1:"Upto 50 Users",
      offer2:"Upto 60gb Storage",
      offer3:"Email+Chat Support",
      color:'red-400'
    },
    {
      plan:'Premium',
      price:'389.99',
      discPrice:'199.99',
      offer1:"Upto 75 Users",
      offer2:"Upto 100gb Storage",
      offer3:"Email+Chat+Whatsapp Support",
      color:'pink-300'
    }
  ]

  return (
   <>
   <div className='bg-sky-100 h-screen'>

    <div className='flex '>
      <div className='w-52'>
       <Sidebar/>
      </div>
      <div className='bg-white '>
        <h1 className='font-semibold text-2xl'>Coose a plan that's just right for you!</h1>
        <div className='grid md:grid-cols-3'>
          {plans.map(plan=><PlanCard plan={plan}/>)}
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
