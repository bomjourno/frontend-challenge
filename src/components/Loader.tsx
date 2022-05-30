import React from 'react'

/*Лоадер был взят с сайта https://loading.io/css/*/

export const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader-ring'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
