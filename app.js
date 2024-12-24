import { Header } from "./components/Header/Header"
import { Outlet } from "react-router-dom"
import './app.css'

export const App=()=>{

  return(
    <div className='app'>
    <Header/>
    <Outlet/>
    </div>
  )
}



