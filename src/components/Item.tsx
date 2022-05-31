import classNames from 'classnames'
import React, { useState } from 'react'
import { IItem } from '../types/types'

interface CatProps {
  item: IItem
  id: string | number
  addFavouriteItem: (value: string | number) => void
}

export const Item = ({ item, addFavouriteItem }: CatProps) => {
  const [like, setLike] = useState<boolean>(false)

  function handleLike(id: number | string) {
    setLike(!like)
    addFavouriteItem(id)
  }

  return (
    <li id={item.id} className='item'>
      <img className='item__image' src={`${item.url}`} alt={`${item.id}`} />
      <button
        className={classNames('like', { like_enable: like })}
        onClick={() => handleLike(item.id)}
      />
    </li>
  )
}
