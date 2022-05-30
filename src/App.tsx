import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Items } from './components/Items'
import { Favourites } from './components/Favourites'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useGetItems } from './hooks/useGetItems'

function App() {
  const [items, isLoading, appendItems] = useGetItems()

  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path='/favourites' element={<Favourites />} />
        <Route
          path='/'
          element={<Items isLoading={isLoading} appendItems={appendItems} items={items} />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
