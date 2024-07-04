import About from "./components/About"
import { Navbar } from "./components/Navbar"
import Home from './components/Home'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Navbar></Navbar>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }])

  return (
    <>
      {/* <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
