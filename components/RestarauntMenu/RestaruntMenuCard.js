import { useParams } from "react-router-dom"

export const RestaruntMenuCard = () => {
    const params = useParams()
    console.log(params)
    
  return (
    <>
    <div>
        <h2>restuarat name</h2>
        <li>pizza</li>
        <li>cake</li>
        <li>sandwitch</li>
    </div>
    </>
  )
}
