import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cats } from './components/Cats'
import { Favourites } from './components/Favourites'
import { Header } from './components/Header'

function App() {
  return (
    <div className='page'>
      <Header />
      <Routes>
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/' element={<Cats />} />
      </Routes>
    </div>
  )
}

export default App
