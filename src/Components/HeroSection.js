import React from 'react'

function HeroSection() {
  return (
      <>
          <div className={'flex flex-row h-5/6 w-screen m-0'}>
        <img  
        className = {'hidden sm:inline-block h-4/6 w-3/5'}  
        alt='img'
        src={'images/image-1.jpg'}
        />
        <img  
      className = {'hidden sm:inline-block h-4/6 '}  
      alt='img'
      src={'images/image-2.jpg'}
        />
        <img  
      className = {'h-4/6 w-3/5'}  
      alt='img'
      src={'images/image-3.jpg'}
    />
      <img  
      className = {'hidden sm:inline-block h-4/6 w-3/5'}  
      alt='img'
      src={'images/image-4.jpg'}
      />
      <img  
      className = {'h-4/6 '}  
      alt='img'
      src={'images/image-6.jpg'}
        /> 
      </div>
      </>
  )
}

export default HeroSection
// rfce