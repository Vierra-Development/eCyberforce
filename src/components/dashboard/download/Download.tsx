import { Archivo } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import DownloadedProd from './_components/DownloadedProd'
import styles from "../download/css/download.module.css"
const archivo = Archivo({
    subsets: ["latin"],
    weight: ["400", "500"]
})



export default function Download() {
    
  return (
    <div>
        <div className='px-[24px]'>
            <h1 className={`text-[#18181B] text-[32px] font-medium mt-6`}>Downloads</h1>
            <div className='flex gap-[20px] justify-end my-6'>
                <button className='flex gap-[10px] p-[10px] border border-[#EAE9F7] rounded-[4px] w-[150px] h-[65px] items-center justify-center'>
                    <Image 
                    src="/clock.svg"
                    alt='clock'
                    width={24}
                    height={24}
                    />
                    <span className='text-nowrap'>Select Date</span>
                </button>
                <button className='flex gap-[10px] p-[10px] border border-[#EAE9F7] rounded-[4px] w-[150px] h-[65px] items-center justify-center'>
                    <Image 
                    src="/funnel.svg"
                    alt='clock'
                    width={24}
                    height={24}
                    />
                    <span>Filters</span>
                </button>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex'>
                  <div className='flex gap-2 w-[390px]'>
                   <h4>Product</h4>
                   <Image 
                   src="/dropdown.svg"
                   alt='drop'
                   width={6}
                   height={3}
                   />
                  </div>
                  <div className='flex gap-2'>
                  <h4>Expiry</h4>
                   <Image 
                   src="/dropdown.svg"
                   alt='drop'
                   width={6}
                   height={3}
                   />
                  </div>
                </div>
                <div className='flex gap-2'>
                  <h4>Action</h4>
                   <Image 
                   src="/dropdown.svg"
                   alt='drop'
                   width={6}
                   height={3}
                   />
                </div>
            </div>
            <DownloadedProd />
            
        </div>
    </div>
  )
}


