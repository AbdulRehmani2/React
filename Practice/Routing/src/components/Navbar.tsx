import { NavLink } from "react-router-dom"

export const Navbar = () => {

  return (
    <div className="nav-container">
        <NavLink activeClassName='active' to='/' className="links">Home</NavLink>
        <NavLink activeClassName='active' to='/recipes' className="links">Recipes</NavLink>
        <NavLink activeClassName='active' to='/reviews' className="links">Reviews</NavLink>
    </div>
  )
}
