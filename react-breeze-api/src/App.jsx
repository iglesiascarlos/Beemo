import DefaultLayout from "./components/DefaultLayout";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Forgot from "./components/Forgot";
import Notfound from "./components/NotFound";

import { Routes, Route } from "react-router-dom"

export default function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<Profile />} />
          <Route path="/forgot-password" element={<Forgot />}/>
          <Route path="*" element={<Notfound />}/>
      </Routes>
    </div>
  )
}
