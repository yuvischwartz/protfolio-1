import React from 'react'
import { Link } from "react-router-dom";
import {useState} from 'react'; 

function DropdownMenu(props) {
  // const [click, setClick] = useState(false);

  // const handleClick = () => {
  //   setClick(!click);
  // }
  return (
    <div className={'ease-in duration-300 sm:hidden bg-stone-50 w-screen h-full'}>
          <nav className={'flex justify-center'}>
            <ul className={'text-2xl p-3 logo divide-y'}>
          <li onClick={props.handleClick} className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-yellow-500'}><Link to="/">HOME</Link></li>
            <li onClick={props.handleClick} className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-yellow-500'}><Link to="/Shop">SHOP</Link></li>
            <li onClick={props.handleClick} className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-yellow-500'}><Link to="/About">ABOUT</Link></li>
            <li onClick={props.handleClick} className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-yellow-500'}><Link to="/Gift">GIFTS</Link></li>  
            <li onClick={props.handleClick} className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-yellow-500'}><Link to="/Blog">BLOG</Link></li>
            <li onClick={props.handleClick} className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-yellow-500'}><Link to="/Workshops">WORKSHOPS</Link></li>
            <li onClick={props.handleClick} className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-yellow-500'}><Link to="/Visit">VISIT</Link></li>
            <li onClick={props.handleClick} className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-yellow-500'}><Link to="/Contact">CONTACT</Link></li>
            </ul>
          </nav>   
    </div>
  )
}

export default DropdownMenu
// border-b-2 border-black