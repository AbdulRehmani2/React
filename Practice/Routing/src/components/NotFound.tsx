import { Link } from "react-router-dom"

function NotFound() {
  return (
    <>
    <div className="found-container">
        <h1>Page not found.<br/> This page does not not exist.</h1>
        <Link to='/'><h2>Home Page</h2></Link>
    </div>
    </>
  )
}

export default NotFound