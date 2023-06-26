import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, useLocation } from 'react-router-dom'
import router from './Layout/routes'
import 'react-awesome-button/dist/themes/theme-blue.css';
import { AnimatePresence } from 'framer-motion'

const location = useLocation();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-lg mx-auto'>
      <AnimatePresence >
      <RouterProvider key={location.pathname} location={location} router={router} />
      </AnimatePresence>
    </div>
  </React.StrictMode>,
)
