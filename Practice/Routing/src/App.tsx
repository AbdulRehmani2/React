import Recipes from "./components/Recipes"
import { Navbar } from "./components/Navbar"
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Reviews from "./components/Reviews"

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="main-container">
        <Navbar/>
        <div className="data-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
