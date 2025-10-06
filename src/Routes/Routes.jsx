import React from 'react'
import { createBrowserRouter } from "react-router";
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Roots from '../pages/Roots/Roots';
import Banner from '../components/Banner/Banner';



export  const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,

    children: [
      {
        index: true,
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/banner',
        element: <Banner></Banner>
      }
    ]


  },
])