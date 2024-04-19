
import Image from 'next/image'
import React from 'react'
import correct from "../../public/images/correcticon.png"
import first from "../../public/images/1st.png"
import second from "../../public/images/2nd.png"
import third from "../../public/images/3rd.png"

const page = () => {
  return (
    <div className='overflow-hidden'>
      <div className='flex flex-col h-screen '>
        <div className='bg-[#6B46C1] flex-1 md:text-center text-start text-white pt-12 md:pt-[4rem] px-8 md:px-[5rem]'>
          <h1 className='font-extrabold md:text-[44px] text-[27px]'>Simple pricing for your business</h1>
          <p className='font-[500px] md:text-[20px] text-[20px] mt-4'>Plans that are carefully crafted to suit your business.</p>
        </div>
        <div className='bg-white flex-1 relative '>
          {/* card */}
          <div className='absolute md:left-1/3 md:right-1/5  md:-translate-x-1/2   -top-1/2 transform'>
          <div className="bg-white mx-6 md:ml-[12rem] md:mt-6 rounded-lg shadow-lg w-[88%] md:w-[100%]">
            {/* Card content goes here */}
           <div className='grid md:grid-cols-[3fr,5fr]  gap-4 md:gap-0 grid-cols-1'>
            {/* left side */}
            <div className='bg-gray-200 px-8 py-8 md:rounded-l-lg rounded-lg'>
              <h2 className='text-[20px] font-extrabold text-center mx-10'>Premium PRO</h2>
              <p className='font-extrabold text-[55px] text-center'>$329</p>
              <p className=' font-[500px] text-[15px] text-center'>billed just once</p>
              <button className=' md:ml-0 ml-4 md:w-[100%] w-[90%] bg-[#6B46C1] mt-3 py-2 rounded-lg'>Get Started</button>
            </div>
            {/* right side */}
            <div className='py-8 px-10 '>
              <p>Access these features when you get this pricing package for your business.</p>
              <div className='flex mt-4 text-[16px] gap-3 items-center'>
                <Image src={correct} alt='correct icon' className='w-[17px] h-[16px]'/>
                <p>International calling and messaging API</p>

              </div>
              <div className='flex mt-4 text-[16px] gap-3 items-center'>
                <Image src={correct} alt='correct icon' className='w-[17px] h-[16px]'/>
                <p>Additional phone numbers</p>

              </div>
              <div className='flex mt-4 text-[16px] gap-3 items-center'>
                <Image src={correct} alt='correct icon' className='w-[17px] h-[16px]'/>
                <p>Automated messages via Zapier</p>

              </div>
              <div className='flex mt-4 text-[16px] gap-3 items-center'>
                <Image src={correct} alt='correct icon' className='w-[17px] h-[16px]'/>
                <p>24/7 support and consulting</p>

              </div>

            </div>
           </div>
         </div>
             
          </div>
          
        </div>
        
      </div>
      <div className='grid grid-cols-1 gap-4 mx-8 md:mt-0 mt-[3rem] mb-8 pb-6 md:grid-cols-3 md:mx-[13rem] '>
                <div className='flex items-center gap-3'>
                <Image src={first} alt='first' className='w-[40px] h-[40px] '/>
                <p className='font-bold'>30 days money back Guarantee</p>
                </div>
                <div className='flex items-center gap-3'>
                <Image src={second} alt='second' className='w-[40px] h-[40px] '/>
                <p className='font-bold'>No setup fees 100% hassle-free</p>
                </div>
                <div className='flex items-center gap-3'>
                <Image src={third} alt='third' className='w-[40px] h-[40px] '/>
                <p className='font-bold'>No monthly subscription Pay once and for all</p>
                </div>
             </div>
    </div>
  )
}

export default page