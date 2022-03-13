import React from 'react'

function DropdownMenu() {
  return (
    <div className={'sm:hidden bg-stone-50 w-screen h-full'}>
          <nav className={'flex justify-center'}>
            <ul className={'text-2xl p-3 logo'}>
            <li className={'p-3 hover:border-b-4 hover:border-stone-300 cursor-pointer hover:text-stone-600'}>SHOP</li>
            <li className={'p-3 hover:border-b-4 hover:border-stone-300 cursor-pointer hover:text-stone-600'}>REFILL</li>
            <li className={'p-3 hover:border-b-4 hover:border-stone-300 cursor-pointer hover:text-stone-600'}>ABOUT</li>
            <li className={'p-3 hover:border-b-4 hover:border-stone-300 cursor-pointer hover:text-stone-600'}>GIFTS</li>  
            <li className={'p-3 hover:border-b-4 hover:border-stone-300 cursor-pointer hover:text-stone-600'}>BLOG</li>
            <li className={'p-3 hover:border-b-4 hover:border-stone-300 cursor-pointer hover:text-stone-600'}>WORKSHOPS</li>
            <li className={'p-3 hover:border-b-4 hover:border-stone-300 cursor-pointer hover:text-stone-600'}>VISIT</li>
            <li className={'p-3 hover:border-b-4 hover:border-stone-300 cursor-pointer hover:text-stone-600'}>CONTACT</li>
            </ul>
          </nav>   
    </div>
  )
}

export default DropdownMenu
// border-b-2 border-black