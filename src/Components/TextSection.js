import React from 'react'

function TextSection(props) {
  return (
      <div className={'bg-stone-200 h-3/6 sm:h-4/6 flex flex-col sm:flex-row my-20'}>
          
        <div className={'bg-white sm:w-1/2'}>
        <img  
                className = {'hidden sm:inline-block h-full'}  
                alt='img'
                src={'images/image-17h.jpg'}
                 />
        </div>
          
        <div className={'justify-center text-center mt-20 w-full sm:w-1/2 sm:ml-20 sm:mt-40'}>
        <h1 className={'logo2 text-2xl font-semibold my-5'}>{props.title}</h1>
        <p className={'text-sm'}>{props.p1}</p>
        <p className={'text-sm'}>{props.p2}</p>
        <p className={'text-sm'}>{props.p3}</p>
        <p className={'text-sm'}>{props.p4}</p>
        </div>
          
    </div>
  )
}

export default TextSection
