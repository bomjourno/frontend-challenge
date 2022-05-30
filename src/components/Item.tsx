import React from 'react'
import { IItem } from '../types/types'

interface CatProps {
  item: IItem
}

export const Item = ({ item }: CatProps) => {
  return (
    <li className='item'>
      <img className='item__image' src={`${item.url}`} alt={`${item.id}`} />
      <button className='like' />
    </li>
  )
}
