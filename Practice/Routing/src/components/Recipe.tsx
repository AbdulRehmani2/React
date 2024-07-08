import { useParams } from "react-router-dom"
import { useEffect } from "react"


function Recipe() {
    const { params } = useParams()
    useEffect(() => {console.log(params)}, [])
  return (
    <div className="recipe-container">
      <p>{params}</p>
    </div>
  )
}

export default Recipe