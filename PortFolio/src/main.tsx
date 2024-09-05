import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Pages/Component/Contact/Contact.tsx';
import About from './Pages/Component/About/About.tsx';
import Layout from './Components/Layout.tsx';
import Home from './Pages/Component/Home/Home.tsx';
import ErrorPage from './Components/Error-page.tsx';
const router =createBrowserRouter([
  {
path:'/',
element:<Layout/>,
errorElement: <ErrorPage />,
children:[
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Contact',
    element:<Contact/>
  },
  {
    path:'/About',
    element:<About/>
  }
]
},
      
    

])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
