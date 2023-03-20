import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import router from './router/router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AuthProvider>
          <App />
      </AuthProvider>
    </RouterProvider>
  </React.StrictMode>
)
