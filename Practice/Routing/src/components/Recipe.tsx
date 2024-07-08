import { useParams, Link } from "react-router-dom"
import { Dish } from "../data/Dishes.json"

interface params {
  recipeID: string;
}

function Recipe() {
    const { recipeID } = useParams<params>()
    const recipe = Number(recipeID) - 1
  return (
    <div className="recipe-container">
      <img src={Dish[recipe].link} alt="Recipe Image" />
      <Link to={`/recipes/${Dish[recipe].id}`}>{Dish[recipe].name}</Link>
      <p>{Dish[recipe].description.slice(0, 100)}...</p>
    </div>
  )
}

export default Recipe