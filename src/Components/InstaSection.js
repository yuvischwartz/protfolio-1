import React from 'react'

function InstaSection() {
  return (
      <div className={'h-4/6 sm:h-screen bg-white'}>
          
          <h3 className={'p-5 sm:pt-20 text-center'}>Follow along @cultivatemarkets</h3>
          <div className={'ml-2 grid grid-cols-2 sm:flex sm:justify-center sm:mx-20 sm:space-x-10 sm:mt-40'}>
              <div className={'col-span-1 h-56 w-56'}>
              <img  
                className = {'h-56 w-56'}  
                alt='img'
                src={'images/image-11.jpg'}
                />
              </div>
              <div className={'col-span-1 h-56 w-56 '}>
              <img  
                className = {'h-56 w-56'}  
                alt='img'
                src={'images/image-13.jpg'}
                />
              </div>
              <div className={'col-span-1 h-56 w-56'}>
              <img  
                className = {'h-56 w-56'}  
                alt='img'
                src={'images/image-8h.jpg'}
                />
              </div>
              <div className={'col-span-1 h-56 w-56'}><img  
                className = {'h-56 w-56'}  
                alt='img'
                src={'images/image-10h.jpg'}
                /></div>
          </div>
    </div>
  )
}

export default InstaSection
