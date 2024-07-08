import { Link } from "react-router-dom"
import Dish from "../data/Dishes.json"

interface Dish {
  id: number,
  name: string,
  link: string,
  description: string
}

interface Recipe {
  id: number,
  link: string,
  name: string,
  desc: string,
}

function Recipes() {

  return (
  <>
    <h1 className="recipes-title">All Recipes</h1>
    <div className="recipes-container">
      {Dish.Dish.map((element: any) => {
        return <Recipe key={element.id} id={element.id} link={element.link} name={element.name} desc={element.description}></Recipe>
      })}
    </div>
  </>  
  )
}

function Recipe({link, name, desc, id}: Recipe)
{
  return (
    <div className="recipe-container">
      <img src={link} alt="Recipe Image" />
      <Link to={`/recipes/${id}`}>{name}</Link>
      <p>{desc.slice(0, 100)}...</p>
    </div>
  )
  
}

export default Recipes