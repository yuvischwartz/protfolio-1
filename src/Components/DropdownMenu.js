import React from 'react'

function DropdownMenu() {
  return (
    <div className={'ease-in duration-300 sm:hidden bg-stone-50 w-screen h-full'}>
          <nav className={'flex justify-center'}>
            <ul className={'text-2xl p-3 logo divide-y'}>
            <li className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>SHOP</li>
            <li className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>REFILL</li>
            <li className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>ABOUT</li>
            <li className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>GIFTS</li>  
            <li className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>BLOG</li>
            <li className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>WORKSHOPS</li>
            <li className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>VISIT</li>
            <li className={'p-3 hover:border-b hover:border-yellow-300 cursor-pointer hover:text-stone-700'}>CONTACT</li>
            </ul>
          </nav>   
    </div>
  )
}

export default DropdownMenu
// border-b-2 border-black