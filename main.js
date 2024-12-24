import ReactDom from 'react-dom/client'
import { App } from './app'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { About } from "./components/About/About"
import {Contact} from './components/Contact/Contact'
import {Error} from './components/ErrorComponent/Error'


const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<App/>,
      errorElement:<Error/>
    },
    {
      path:'/about',
      element:<About/>,
      
    },
    {
      path:'/contact',
      element:<Contact/>,
      
    }
  ])

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)