
import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeeFood from './components/SeaFood/SeaFood'
import AllProducts from './components/AllProduct/AllProducts'
import Layout from './components/Layout/Layout'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/Fruit',
          element: <Fruits />
        },
        {
          path: '/Dairy',
          element: <Dairy />
        },
        {
          path: '/SeeFood',
          element: < SeeFood />
        },
        {
          path: '/AllProduct',
          element: < AllProducts />
        }
      ]
    }

  ])
  return <RouterProvider router={router} />
}

export default App