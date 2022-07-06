import { Route, Routes } from "react-router-dom"
import Cleaning from "./pages/Cleaning"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cleaning" element={<Cleaning />} />
      </Routes>
    </>
  )
}

export default App
