import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="nav-container">
        <Link to='/' className="links">Home</Link>
        <Link to='/about' className="links">About</Link>
        <Link to='/contact' className="links">Contact Us</Link>
    </div>
  )
}
