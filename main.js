import ReactDom from 'react-dom/client'
import { App } from './app'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { About } from "./components/About/About"
import {Contact} from './components/Contact/Contact'
import {Error} from './components/ErrorComponent/Error'
import {Body} from './components/Body/Body'
import { RestaruntMenuCard } from './components/RestarauntMenu/RestaruntMenuCard'



const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Body/>,
          
        },
        {
          path:'/about',
          element:<About/>,
          
        },
        {
          path:'/contact',
          element:<Contact/>,
          
        },
        {
          path:'/restarunt/:resId',
          element:<RestaruntMenuCard/>
        }
      ],
      errorElement:<Error/>
    }
   
  ])

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)