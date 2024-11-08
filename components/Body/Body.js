import './Body.css'
import { Card } from './res-card/Card'
import { restuarents } from '../../utility/mockdata/mockdata'

export const Body=()=>{
  
  const filterHandler=_=>{
    restuarents.filter(item=>item.info.avgRating>4)
  }
    return (
    <div className='body'>
      <div className='search-bar'>
        <input type='text' className='search-input'/>
        <button type='submit' value='search'>Search</button>
        <button onClick={()=>{filterHandler}} className='filter-btn'>filter</button>
      </div>
      <div className='res-container'>
        {
          restuarents.length>0 ? restuarents.map(restuarent=>{
            const {info} = restuarent
            return <Card key={info.id} restuarent={info}/>
          }): "no list"
        }
      
      </div>
    </div>)
}