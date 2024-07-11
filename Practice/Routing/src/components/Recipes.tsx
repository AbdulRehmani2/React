import { Link } from "react-router-dom"
import Dish from "../data/Dishes.json"
import { motion } from "framer-motion"
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
  <motion.div initial={{opacity: 1}} animate={{opacity: 1, y: [-10, 0]}} transition={{duration: 0.5}}>
    <h1 className="recipes-title">All Recipes</h1>
    <div className="recipes-container">
      {Dish.Dish.map((element: any) => {
        return <Recipe key={element.id} id={element.id} link={element.link} name={element.name} desc={element.description}></Recipe>
      })}
    </div>
  </motion.div>  
  )
}

function Recipe({link, name, desc, id}: Recipe)
{
  return (
    <motion.div whileHover={{scale: 1.05, background: "rgb(198, 198, 198)"}} transition={{duration: 0.3}} className="recipe-container">
      <img src={link} alt="Recipe Image" />
      <Link to={`/recipes/${id}`}>{name}</Link>
      <p>{desc.slice(0, 100)}...</p>
    </motion.div>
  )
  
}

export default Recipes