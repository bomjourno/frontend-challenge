import React from 'react'
import { useLazyLoading } from '../hooks/useLazyLoading'
import { IItem } from '../types/types'
import { Item } from './Item'

interface IItemsProps {
  items: IItem[]
  appendItems: () => void
}

export const Items = ({ items, appendItems }: IItemsProps) => {
  const [onScroll, containerRef] = useLazyLoading({
    onIntersection: appendItems,
    delay: 1200,
  })

  return (
    <div className='items' ref={containerRef} onScroll={onScroll}>
      <ul className='items__list'>
        {items.map((item, index) => (
          <Item key={`${index}-${item.id}`} item={item} />
        ))}
      </ul>
    </div>
  )
}
