import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import appRouter from './Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* used a new component for routing - Router.jsx */}
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
