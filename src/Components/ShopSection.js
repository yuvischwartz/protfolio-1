import React from 'react'

function ShopSection() {
  return (
    <div className={'flex justify-center flex-col sm:flex-row m-5'}>
            <div className={''}>
            <div className={'bg-yellow-100 h-96 w-96 sm:h-72 sm:w-72 m-10'}>
            <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72'}  
                alt='img'
                src={'images/image-12.jpg'}
                 />  
            </div>
              <div className={'bg-yellow-200 h-96 w-96 sm:h-72 sm:w-72 m-10'}>
              <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72'}  
                alt='img'
                src={'images/image-14.jpg'}
                 />
            </div>
            
            </div>
            <div className={''}>
              <div className={'bg-yellow-300 h-96 w-96 sm:h-72 sm:w-72 m-10'}>
              <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72'}  
                alt='img'
                src={'images/image-15.jpg'}
                  />
                {/* <div className={'bg-black h-10 w-72 z-10'}></div> */}
            </div>
              <div className={'bg-yellow-400 h-96 w-96 sm:h-72 sm:w-72 m-10'}>
              <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72'}  
                alt='img'
                src={'images/image-13.jpg'}
                 />
            </div>
            </div>
    </div>
  )
}

export default ShopSection
