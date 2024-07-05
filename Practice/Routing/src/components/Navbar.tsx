import { Link } from "react-router-dom"

export const Navbar = () => {

  return (
    <div className="nav-container">
        <Link to='/' className="links">Home</Link>
        <Link to='/recipes' className="links">Recipes</Link>
        <Link to='/reviews' className="links">Reviews</Link>
    </div>
  )
}
