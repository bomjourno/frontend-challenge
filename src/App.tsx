import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cats } from './components/Cats'
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

  return (
    <div className='page'>
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/' element={<Cats items={items} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
