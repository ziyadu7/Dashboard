import { useState } from 'react'
import Sidebar from './components/Sidebar'
import PlanCard from './components/planCard'
import BottomCard from './components/bottomCard'
import {GoPerson} from 'react-icons/go'
import {TiCloudStorageOutline} from 'react-icons/ti'
import { MdMailOutline} from 'react-icons/md'
import {  RiCheckDoubleLine} from 'react-icons/ri'
import AccountDiv from './components/accountDiv'
import { FaBars } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

function App() {

  const [show,setShow] = useState(false)

  const plans = [
    {
      plan:'Basic',
      price:'89.99',
      discPrice:'9.99',
      offer1:"Upto 25 Users",
      icon1:<GoPerson/>,
      icon2:<TiCloudStorageOutline/>,
      icon3:<MdMailOutline/>,
      offer2:"Upto 25gb Storage",
      offer3:"Email Support",
      color:'amber-200'
    },
    {
      plan:'Standard',
      price:'189.99',
      discPrice:'99.99',
      offer1:"Upto 50 Users",
      icon1:<GoPerson/>,
      icon2:<TiCloudStorageOutline/>,
      icon3:<MdMailOutline/>,
      offer2:"Upto 60gb Storage",
      offer3:"Email+Chat Support",
      color:'red-400'
    },
    {
      plan:'Premium',
      price:'389.99',
      discPrice:'199.99',
      offer1:"Upto 75 Users",
      icon1:<GoPerson/>,
      icon2:<TiCloudStorageOutline/>,
      icon3:<MdMailOutline/>,
      offer2:"Upto 100gb Storage",
      offer3:"Email+Chat+Whatsapp Support",
      color:'pink-300'
    }
  ]


  const offers = [
    {
      head:"Free Starter",
      minHead:'Free Forever',
      description:'The quickest and easiest way to try protocols with  basic functionalities',
      color:'green-500',
      buttonText:'Get Started',
      offers:[{
        one:'Upto 8 Users',
        icon:<GoPerson/>
      },
      {
        one:'Upto 3gb Storage',
        icon:<TiCloudStorageOutline/>
      },
      {
        one:'Email support',
        icon:<MdMailOutline/>
      }, 
      {
        one:'Basic documents, Task Flow, Volting, Acoounting, Banking, Notes, Investor, Direactor and Team management included',
        icon:< RiCheckDoubleLine/>
      },
    ]
    },
    {
       head:"Enterprice Plan",
    minHead:"Let's Connect",
    description:'Effortlessly constomize and fine-tune services as your needs shift, ensuring the perfect tools for success',
    color:'sky-400',
    buttonText:'Contact Us',
    offers:[{
      one:'More that 75 Users',
      icon:<GoPerson/>
    },
    {
      one:'Customization of all other features',
      icon:< RiCheckDoubleLine/>
    },
  ]}
  ]

  return (
   <>
   <div className='bg-sky-100 h-full'>
    <div onClick={()=>setShow(!show)} className='md:hidden fixed z-50 hover:cursor-pointer start-4 top-5'>
      <FaBars className='text-xl'/>
    </div>
    <div className='sm:flex hidden'>
    <div className='md:h-36'>
      <div className='md:w-96 md:fixed'>
        <img src="https://thumbs.dreamstime.com/b/rgb-276621239.jpg" className='md:w-60 w-full h-44' alt="" />
      </div>
    </div>
   <AccountDiv/>
    </div>
    <div className='flex'>
      <div className='md:w-52 '>
       <Sidebar show={show} setShow={setShow} />
      </div>
      <div className='bg-white w-full md:w-4/5'>
        <div className='overflow-hidden p-10 sm:ps-20'>
        <h1 className='font-semibold overflow-hidden text-2xl'>Coose a plan that's just right for you!</h1>
        </div>
        <div className='grid lg:grid-cols-3 overflow-hidden grid-cols-1 gap-6 md:mb-20 m-auto md:ps-20 md:pe-20 md:w-full'>
          {plans.map(plan=><PlanCard plan={plan}/>)}
        </div>
        <div className='grid grid-cols-1 overflow-hidden lg:grid-cols-2 sm:gap-12 sm:ps-20 sm:pe-20'>
          {offers.map(offers=> <BottomCard offers={offers}/>)}
        </div>
      </div>
      <div className='h-screen'>
            <div className='fixed '>
                  <p className='absolute -right-24 bg-white text-4xl rounded-sm'><IoIosNotifications className='text-blue-500'/></p>
            </div>
            <div className='fixed '>
                  <p className='absolute rounded-full bg-sky-400 -right-24 top-96 text-4xl'><FaPlus className='text-blue-500'/></p>
            </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
