import { createBrowserRouter } from 'react-router-dom'

import { App } from './app'
import { Error } from './pages/error'
import { NotFound } from './pages/notFound'
import { Sales } from './pages/sales'
import { Sale } from './pages/sales/sale'
import { Summary } from './pages/summary'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Summary />,
      },
      {
        path: '/sales',
        element: <Sales />,
      },
      {
        path: '/sales/:saleId',
        element: <Sale />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
