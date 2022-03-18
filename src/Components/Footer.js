import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import MobileViewFooter from './MobileViewFooter'
import './Navbar.css'

function Footer() {
    return (
      <>
      <div className={'hidden sm:inline-block h-3/6'}>
        <div className={'flex justify-center h-3/6 w-screen bg-white border-double border-stone-400 border-t'}>
        
        <div className={'ml-40 m-20'}>
              <ul>
                  <li className={'hover:text-yellow-500 nav-item border-b'}><Link to="/">Home</Link></li>
                  <li className={'hover:text-yellow-500 nav-item border-b'}><Link to="/Shop">Shop</Link></li>
                  <li className={'hover:text-yellow-500 nav-item border-b'}><Link to="/Contact">Contact Us</Link></li>
                  <li className={'hover:text-yellow-500 nav-item border-b'}><Link to="/About">About</Link></li>
              </ul> 
        </div>
        <div className={'m-20 ml-40'}>
            <ul>
                  <li className={'hover:text-yellow-500 nav-item border-b'}><Link to="/Gift">Gift Cards</Link></li>
                  <li className={'hover:text-yellow-500 nav-item border-b'}><Link to="/Visit">Visit</Link></li>
                  <li className={'hover:text-yellow-500 nav-item border-b'}><Link to="/Gift">Gift Bags</Link></li>
                  <li className={'hover:text-yellow-500 nav-item border-b'}><Link to="/About">More About Us</Link></li>
            </ul> 
        </div>
            <div className={'m-20'}>
              {/* <h1 className={'logo2 text-2xl'}>Natural Self</h1> */}
              <h2 className={'logo text-xl'}>Market Natural</h2>
              <h3 className={'pt-5 logo text-lg'}>join us and receive 10% off your next order</h3> 
              {/* <p className={'text-sm'}>Our policy learn more about it</p> */}
              <span className={'m-5'}><Button buttonText={'Learn More'}/></span>
        </div>
        <div className={'m-0 h-72'}>
            <img  
            className = {'h-full'}  
            alt='img'
            src={'images/logo.jpg'}
            />  
            </div>   
      </div>
      <h3 className={'text-center text-sm logo mt-40'}>©2021 CULTIVATE MARKET LLC | CULTIVATE MARKET℠ AND BEAUTIFULLY SUSTAINABLE℠ ARE SERVICE MARKS OF CULTIVATE MARKET LLC</h3>
      </div>

      <MobileViewFooter/>
      
        
    </>
  )
}

export default Footer
