
import React, { useEffect, useState } from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeeFood from './components/SeaFood/SeaFood'
import AllProducts from './components/AllProduct/AllProducts'
import Layout from './components/Layout/Layout'
import Searchbar from './components/Searchbar/Searchbar'
import SplashScreen from './components/SplashScreen/SplashScreen'
import AboutUs from './components/AboutUs/AboutUs'
import Process2 from './components/Process2/Process2'



function App() {
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

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
        },
        {
          path : '/Searchbar',
          element : <Searchbar/>
        },
        {
          path : '/AboutUs',
          element : <AboutUs/>
        },
        {
          path: '/Process2',
          element : <Process2/>
        }
      ]
    }

  ])
  if (loading) {
    return <SplashScreen />;
  }
  return <RouterProvider  router={router} />
}

export default App