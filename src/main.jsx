import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Explore from './pages/Explore'
import CreatePost from './pages/CreatePost'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import ItemDetails from './pages/ItemDetails'
import Register from './pages/Register'
import Request from './pages/Request'

const router=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/login",element:<Login/>},
  {path:"/feed",element:<Feed/>},
  {path:"/explore",element:<Explore/>},
  {path:"/create/post",element:<CreatePost/>},
  {path:"/chat",element:<Chat/>},
  {path:"/profile",element:<Profile/>},
  {path:"/itemdetails",element:<ItemDetails/>},
  {path:"/register",element:<Register/>},
  {path:"/request",element:<Request/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
