import React from 'react'
import { IItem } from '../types/types'

interface CatProps {
  cat: IItem
}

export const Cat = ({ cat }: CatProps) => {
  return (
    <li className='cat'>
      <img className='cat__image' src={`${cat.url}`} alt={`${cat.id}`} />
      <button className='like' />
    </li>
  )
}
