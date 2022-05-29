import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <Link className='header_tab' to='/'>
        Все котики
      </Link>
      <Link className='header_tab' to='/'>
        Любимые котики
      </Link>
    </header>
  )
}
