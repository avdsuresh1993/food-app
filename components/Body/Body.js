import './Body.css'
import { Card } from './res-card/Card'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { ShimmerUI } from '../Shimmer/Shimmer'
import { Link } from 'react-router-dom'

export const Body=()=>{
  
  const [restuarentList,setRestuarentList] = useState([])
  const [searchText,setSearchText] = useState('')
  const [filteredList,setFilteredList] = useState([])


  useEffect(()=>{
         fetchData()   
  },[])

    const fetchData=async()=>{
    const result = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4868288&lng=78.4165952&is-seo-homepage-enabled=true')
    setRestuarentList(result.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredList(result.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const filterHandler=_=>{
    setRestuarentList(prev=>[...prev.filter(item=>item.info.avgRating>4.2)])
  }

    return (
    <div className='body'>
      <div className='search-bar'>
        <input type='text' className='search-input' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
        <button type='submit' value='search' onClick={()=>{
          setFilteredList([...restuarentList.filter(item=>item.info.name.toLowerCase().includes(searchText))])
        }}>Search restaurant</button>
        <button onClick={filterHandler} className='filter-btn'>Top restaurant</button>
      </div>
      <div className='res-container'>
        {
          filteredList.length>0 ? filteredList.map(restuarent=>{
            const {info} = restuarent
            return <Link to={`/restarunt/${info.id}`}  key={info.id}><Card restuarent={info}/></Link>
          }): <ShimmerUI/>
        }
      
      </div>
    </div>)
}