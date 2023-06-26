import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Layout/routes'
import 'react-awesome-button/dist/themes/theme-blue.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-lg mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
