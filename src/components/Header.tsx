import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <NavLink
          className={(activeStyle) =>
            activeStyle.isActive ? 'header__tab header__tab_active' : 'header__tab'
          }
          to='/'
        >
          Все котики
        </NavLink>
        <NavLink
          className={(activeStyle) =>
            activeStyle.isActive ? 'header__tab header__tab_active' : 'header__tab '
          }
          to='/favourites'
        >
          Любимые котики
        </NavLink>
      </div>
    </header>
  )
}
