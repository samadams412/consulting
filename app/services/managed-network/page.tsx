import Navbar from '@/components/Navbar'
import React from 'react'
import "../../../app/assets/css/styles.css"
export default function ManagedNetwork() {
  return (
    <>
    <Navbar />
    <div className='demo'>
      <div className='max-w-7xl mx-auto'>
        <header>
              <h1>
                Managed Network Services
              </h1>
              <p className='mt-4 text-lg text-blue-400 hover:text-red-400'>
                Empowering Your Business with Reliable Network Solutions
              </p>
        </header>
      </div>
    </div>
    </>
  )
}
