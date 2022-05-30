import React from 'react'

interface IFooterProps {
  isLoadAppendItems: boolean
}

export const Footer = ({ isLoadAppendItems }: IFooterProps) => {
  return (
    <footer className='footer'>
      {isLoadAppendItems && (
        <span className='append-items-loader'>... загружаем еще котиков ...</span>
      )}
    </footer>
  )
}
