import React from 'react'

function TextSection2() {
  return (
    <div className={'bg-stone-200 h-3/6 sm:h-4/6 flex flex-col sm:flex-row my-20'}>

        <div className={'justify-center text-center mt-20 w-full sm:w-1/2 sm:ml-20 sm:mt-40'}>
              <h1 className={'logo2 text-2xl font-semibold my-5'}>Come Visit Us</h1>
              <p className={'text-sm'}>Holladay friends our retail location is open for in-store shopping. We are</p>
              <p className={'text-sm'}>delighted to offer a safe, personalized shopping experience. Call/text or</p>
              <p className={'text-sm'}>schedule your appointment online. We also offer no contact local deliveries</p>
              <p className={'text-sm'}>on Mondays.</p>
        </div>
          
        <div className={'bg-white sm:w-1/2'}>
        <img  
                className = {'hidden sm:inline-block h-full'}  
                alt='img'
                src={'images/image-9h.jpg'}
                 />
        </div>
          
        
          
    </div>
  )
}

export default TextSection2
