import React from 'react'
import Layout from './routes/Layout'
import Home from './routes/Home'
import Peoples from './routes/Peoples'
import NotFound from './routes/NotFound'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { routes } from './const'

const pageRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.characters,
        element: <Peoples />,
      },
    ],
  },
]

export const router = createBrowserRouter(
  [
    ...pageRoutes,
    {
      path: routes.page_404,
      element: <NotFound />,
    },
    {
      path: '*',
      element: <Navigate to={routes.page_404} replace />,
    },
  ],
  {
    basename: `/${process.env.PUBLIC_URL}`,
  },
)

function App() {
  return <RouterProvider router={router} />
}

export default App
