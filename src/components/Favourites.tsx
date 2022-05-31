import React from 'react'
import { IItem } from '../types/types'
import { Item } from './Item'

interface IFavouritesProps {
  favouriteItems: IItem[]
  addFavouriteItem: (value: string | number) => void
}

export const Favourites = ({ favouriteItems, addFavouriteItem }: IFavouritesProps) => {
  return (
    <div className='items'>
      <ul className='items__list'>
        {favouriteItems.map((item, index) => (
          <Item
            key={`${index}-${item.id}`}
            item={item}
            addFavouriteItem={addFavouriteItem}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  )
}
