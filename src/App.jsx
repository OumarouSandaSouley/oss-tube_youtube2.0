import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Category from './context/Categories'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
])

const App = () => {
  const [cat, setCat] = useState('New')
  return (
    <Category.Provider value={[cat, setCat] }>
      <RouterProvider router={router} />
    </Category.Provider>
  )
}

export default App