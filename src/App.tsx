import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Items } from './components/Items'
import { Favourites } from './components/Favourites'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useGetItems } from './hooks/useGetItems'
import { IItem } from './types/types'

function App() {
  const [items, appendItems, isLoading, isLoadAppendItems] = useGetItems()
  const [favouriteItems, setFavouriteItems] = useState<IItem[]>([])
  const location = useLocation()

  function addFavouriteItem(id: string | number) {
    if (location.pathname === '/favourites') {
      setFavouriteItems(favouriteItems.filter((item) => item.id !== id))
    } else {
      setFavouriteItems((prev: IItem[]) => items.filter((item) => item.id == id).concat(...prev))
    }
  }

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route
          path='/favourites'
          element={
            <Favourites addFavouriteItem={addFavouriteItem} favouriteItems={favouriteItems} />
          }
        />
        <Route
          path='/'
          element={
            <Items
              isLoading={isLoading}
              appendItems={appendItems}
              items={items}
              addFavouriteItem={addFavouriteItem}
            />
          }
        />
      </Routes>
      <Footer isLoadAppendItems={isLoadAppendItems} />
    </div>
  )
}

export default App
