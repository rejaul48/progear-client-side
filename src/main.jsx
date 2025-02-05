import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import routers from './routers/routers.jsx'
import SportsProvider from './contextApi/SportsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SportsProvider >
      <RouterProvider router={routers}>

      </RouterProvider>
    </SportsProvider>
  </StrictMode>,
)
