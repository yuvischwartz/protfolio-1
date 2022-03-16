import React from 'react'

function ShopSection(props) {
  return (
    <div className={'flex justify-center flex-col sm:flex-row m-5'}>
            <div className={''}>
            <div className={'bg-yellow-100 h-96 w-96 sm:h-72 sm:w-72 m-10'}>
            <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72'}  
                alt='img'
                src={`images/${props.imageName1}.jpg`}
                 />  
            </div>
              <div className={'bg-yellow-200 h-96 w-96 sm:h-72 sm:w-72 m-10'}>
              <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72'}  
                alt='img'
                src={`images/${props.imageName2}.jpg`}
                 />
            </div>
            
            </div>
            <div className={''}>
              <div className={'bg-yellow-300 h-96 w-96 sm:h-72 sm:w-72 m-10'}>
              <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72'}  
                alt='img'
                src={`images/${props.imageName3}.jpg`}
                  />
                {/* <div className={'bg-black h-10 w-72 z-10'}></div> */}
            </div>
              <div className={'bg-yellow-400 h-96 w-96 sm:h-72 sm:w-72 m-10'}>
              <img  
                className = {'h-96 w-96 sm:h-72 sm:w-72'}  
                alt='img'
                src={`images/${props.imageName4}.jpg`}
                 />
            </div>
            </div>
    </div>
  )
}

export default ShopSection
