import React, { useCallback, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Items } from './components/Items'
import { Favourites } from './components/Favourites'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { IItem } from './types/types'
import { api } from './utils/Api'

function App() {
  const [items, setItems] = useState<IItem[]>([])

  useEffect(() => {
    api.getItems().then((res) => {
      setItems(res)
    })
  }, [])

  const appendItems = useCallback(() => {
    api.getItems().then((res) => setItems((prevState) => [...prevState, ...res]))
  }, [setItems])

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/' element={<Items appendItems={appendItems} items={items} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
