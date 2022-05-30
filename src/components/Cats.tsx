import React from 'react'
import { IItems } from '../types/types'
import { Cat } from './Cat'

export const Cats = ({ items }: IItems) => {
  return (
    <div className='cats'>
      <ul className='cats__list'>
        {items.map((cat, index) => (
          <Cat key={`${index}-${cat.id}`} cat={cat} />
        ))}
      </ul>
    </div>
  )
}
