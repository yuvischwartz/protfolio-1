import React from 'react'
import Button from './Button'

function MobileViewFooter() {
  return (
    <div className={'mt-40 sm:hidden bg-white w-screen h-full border-double border-stone-400 border-t'}>       
            <nav className={'sm:hidden flex justify-center'}>
                    <ul className={'text-md text-center'}>
            <li className={'mr-10'}><img  
            className = {'h-3/6 w-3/6'}  
            alt='img'
            src={'images/logo.jpg'}
            /> </li> 
           
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>About</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>Shop</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>Contact Us</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>Gift Bag</li>  
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>Gift Cards</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>Shipping & Returns</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>More Info</li>
            <li className={'border-b hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>More About Us</li>
            <li><div className={'m-20'}>
              {/* <h1 className={'logo2 text-2xl'}>Natural Self</h1> */}
              <h2 className={'logo text-xl'}>Market Natural</h2>
              <h3 className={'pt-5 logo text-lg'}>join us and receive 10% off your next order</h3> 
              {/* <p className={'text-sm'}>Our policy learn more about it</p> */}
                <Button buttonText={'Learn More'} />
            <li><h3 className={'text-center mt-10 text-sm logo bg-white h-20'}>©2021 CULTIVATE MARKET LLC | CULTIVATE MARKET℠ AND BEAUTIFULLY SUSTAINABLE℠ ARE SERVICE MARKS OF CULTIVATE MARKET LLC</h3></li>
            </div></li>
            </ul>
          </nav>   
    </div>
  )
}

export default MobileViewFooter
