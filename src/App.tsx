import { Route, Routes } from "react-router-dom"
<<<<<<< Updated upstream
import Cleaning from "./pages/Cleaning"
import Home from "./pages/Home"
import Insurance from "./pages/Insurance"
import Login from "./pages/Login"
import Register from "./pages/Register"

=======
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CleaningOverview from "./components/CleaningOverview"
import Cleaning from "./pages/Cleaning"
import CleaningService from "./components/CleaningService"
>>>>>>> Stashed changes

function App() {
  return (
    <>
<<<<<<< Updated upstream
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cleaning" element={<Cleaning />} />
        <Route path="/insurance" element={<Insurance />} />
      </Routes>

=======
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
      <Cleaning />
>>>>>>> Stashed changes
    </>
  )
}

export default App
