import React from 'react'
import { Link } from "react-router-dom";
import MobileNavBar from './MobileNavBar';
import './Navbar.css'
function Navbar() {
  return (
    <>
     <MobileNavBar/>
     
      <div className={'grid grid-cols-12 sm:flex sm:justify-between sm:text-center sm:h-32 sm:pt-5 text-sm'}>
        <ul className={'sm:pt-6 p-10 menu cursor-pointer'}>
        <li className={'nav-item font-semibold hidden sm:inline-block sm:px-5'}><Link to="/">Home</Link></li>
        <li className={'nav-item font-semibold hidden sm:inline-block sm:px-5'}><Link to="/Shop">Shop</Link></li>
        <li className={'nav-item font-semibold hidden sm:inline-block sm:px-5'}><Link to="/About">About</Link></li>
        <li className={'nav-item font-semibold hidden sm:inline-block sm:px-5'}><Link to="/Gift">Gifts</Link></li>  
        </ul>
        <div className={'col-span-12 pt-3 cursor-pointer'}>
        <Link className={'hidden sm:inline-block'} to="/" >
            <h1 className={'logo text-3xl'}>CULTIVATE MARKET</h1>
            <h2 className={'logo2 text-sm col-span-12'}>BEAUTIFULY SUSTAINABLE</h2>
        </Link>
        </div>
        <ul className={'sm:pt-6 p-8 menu cursor-pointer'}>
        <li className={'nav-item font-semibold hidden sm:inline-block sm:px-5'}><Link to="/Blog">Blog</Link></li>
        <li className={'nav-item font-semibold hidden sm:inline-block sm:px-5'}><Link to="Workshops">Workshops</Link></li>
        <li className={'nav-item font-semibold hidden sm:inline-block sm:px-5'}><Link to="/Visit">Visit</Link></li>
        <li className={'nav-item font-semibold hidden sm:inline-block sm:px-5'}><Link to="/Contact">Contact</Link></li>
        <li className={'nav-item hidden col-span-12 sm:inline-block sm:px-5 text-2xl'}><i className={"fa-solid fa-cart-shopping"} /></li>
        </ul>
        </div>
   </>
  )
}

export default Navbar
