import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateTrip } from './components/create-trip/Index.jsx'
import Home from './components/Pages/Home.jsx'

const router=createBrowserRouter([
  {
        path:'',
        element:<App/>,
        children:[
          {
            path:"/createtrip",
            element:<CreateTrip/>
          },
          {
            index:true,
            element:<Home/>
          },
          

        ]
  },

  
]
)
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
