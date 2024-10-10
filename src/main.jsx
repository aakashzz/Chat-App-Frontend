import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import { Signup } from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/signup",
        element:<Signup />,
      },
      {
        path:'/',
        element:<Login />
      },
      {
        path:"/chat",
        element:<Home />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
