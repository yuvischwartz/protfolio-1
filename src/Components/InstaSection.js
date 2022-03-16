import React from 'react'

function InstaSection(props) {
  return (
      <div className={'h-4/6 sm:h-screen bg-white'}>
          
          <h3 className={`p-5 sm:pt-20 text-center ${props.costumClass}`}>{props.titleText}</h3>
          <div className={'ml-2 grid grid-cols-2 sm:flex sm:justify-center sm:mx-20 sm:space-x-10 sm:mt-40'}>
              <div className={'col-span-1 h-56 w-56'}>
              <img  
                className = {'h-56 w-56'}  
                alt='img'
                src={`images/${props.imageName1}.jpg`}
                />
              </div>
              <div className={'col-span-1 h-56 w-56 '}>
              <img  
                className = {'h-56 w-56'}  
                alt='img'
                src={`images/${props.imageName2}.jpg`}
                />
              </div>
              <div className={'col-span-1 h-56 w-56'}>
              <img  
                className = {'h-56 w-56'}  
                alt='img'
                src={`images/${props.imageName3}.jpg`}
                />
              </div>
              <div className={'col-span-1 h-56 w-56'}><img  
                className = {'h-56 w-56'}  
                alt='img'
                src={`images/${props.imageName4}.jpg`}
                /></div>
          </div>
    </div>
  )
}

export default InstaSection
