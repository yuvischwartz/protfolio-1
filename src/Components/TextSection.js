import React from 'react'

function TextSection() {
  return (
      <div className={'bg-stone-200 h-3/6 sm:h-4/6 flex flex-col sm:flex-row my-20'}>
          
        <div className={'bg-white sm:w-1/2'}>
        <img  
                className = {'hidden sm:inline-block h-full'}  
                alt='img'
                src={'images/image-17h.jpg'}
                 />
        </div>
          
        <div className={'justify-center text-center mt-20 w-full sm:w-1/2 sm:ml-20 sm:mt-40'}>
              <h1 className={'logo2 text-2xl font-semibold my-5'}>Our Refill Bar</h1>
              <p className={'text-sm'}>Our refill bar offers a variety of organic, natural products. Simply bring in</p>
              <p className={'text-sm'}>your empty, clean container and refill from our selection. By shopping in bulk </p>
              <p className={'text-sm'}>you save money by reducing waste and support local small businesses.</p>
        </div>
          
    </div>
  )
}

export default TextSection
