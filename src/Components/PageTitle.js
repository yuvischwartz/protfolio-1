import React from 'react'

function PageTitle(props) {
  return (
    <div className={'bg-stone-100 h-20 w-screen'}>
          <h1 className={'text-left logo2 text-2xl ml-10 pt-5'}>{props.title}</h1>
    </div>
  )
}

export default PageTitle
