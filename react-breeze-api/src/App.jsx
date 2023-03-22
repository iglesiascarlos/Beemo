import DefaultLayout from "./components/DefaultLayout";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Profile from "./components/Profile";

import { Routes, Route } from "react-router-dom"

export default function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<Profile />} />
      </Routes>
    </div>
  )
}
