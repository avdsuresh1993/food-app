import './Body.css'
import { Card } from './res-card/Card'
import { restuarents } from '../../utility/mockdata/mockdata'
import { useState } from 'react'

export const Body=()=>{
  
  const [restuarentList,setRestuarentList] = useState(restuarents)
  const filterHandler=_=>{
    // restuarents.filter(item=>item.info.avgRating>4)
    setRestuarentList(prev=>[...prev.filter(item=>item.info.avgRating>4)])
  }
    return (
    <div className='body'>
      <div className='search-bar'>
        <input type='text' className='search-input'/>
        <button type='submit' value='search'>Search</button>
        <button onClick={filterHandler} className='filter-btn'>filter</button>
      </div>
      <div className='res-container'>
        {
          restuarentList.length>0 ? restuarentList.map(restuarent=>{
            const {info} = restuarent
            return <Card key={info.id} restuarent={info}/>
          }): "no list"
        }
      
      </div>
    </div>)
}