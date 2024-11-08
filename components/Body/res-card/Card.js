import './Card.css'
import { config } from '../../../utility/common'

export const Card=({restuarent})=>{
  console.log(restuarent)
   const {name,cloudinaryImageId,cuisines,avgRating:rating,areaName} = restuarent
   const cuisine =cuisines.join(', ')
    return (
        <>
        <div className='card'>
            <img src={`${config.cloudUrl}/${cloudinaryImageId}`} alt={cuisine} />
            <div >
                <h3 className='card_heading'>{name}</h3>
                <div className='card_content'>
                <p>{cuisines.join(', ')}</p>
                <div className='rating'>
                    <p>{areaName}</p>
                    <p><strong>{rating}</strong></p>
                    
                </div>
                </div>
            </div>

        </div>
        
        </>
    )
}