import React from 'react'
import Navbar from './Components/Navbar'
import Topbar from './Components/Topbar'
// import img1 from '../public/Images/image-1.jpg';

function Home() {
  return (
    <div className={'h-screen bg-stone-50 '}>
      <div className={'flex flex-row h-5/6 w-screen'}>
      {/* <div className={'grid grid-cols-6 h-5/6 w-screen'}> */}
        <img  
        className = {'h-4/6 w-3/5'}  
        alt='img'
        src={'images/image-1.jpg'}
        />
        <img  
      className = {'h-4/6 '}  
      alt='img'
      src={'images/image-2.jpg'}
        />
        <img  
      className = {'h-4/6 w-3/5'}  
      alt='img'
      src={'images/image-3.jpg'}
    />
     
      <img  
      className = {'h-4/6 w-3/5'}  
      alt='img'
      src={'images/image-4.jpg'}
      />
      <img  
      className = {'h-4/6 '}  
      alt='img'
      src={'images/image-6.jpg'}
        />
        {/* <img  
      className = {'h-4/6 '}  
      alt='img'
      src={'images/image-1.jpg'}
        /> */}
      </div>
    </div>
  )
}

export default Home
