import { createBrowserRouter } from 'react-router-dom'

import { DashboardLayout } from './layouts/dashboard-layout'
import { DashboardHomePage } from '../features/dashboard/pages/dashboard-home-page'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHomePage />,
      },
    ],
  },
])
