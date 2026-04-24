import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'


// const router= createBrowserRouter([
//   {
//     path:'/',
//     element: <App/>,
//     children:[

     
//       {path:'/about',
//       element:<About/>
//       },
//       {
//         path:'/skills',
//         element:<SkillsSection/>
//       },
//       {
//         path:'/projects',
//         element:<Projects/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
