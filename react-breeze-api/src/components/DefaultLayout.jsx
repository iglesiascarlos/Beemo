import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Personaje from "../components/Personaje";

import { useEffect } from "react"
import useAuthContext from "../context/AuthContext"


export default function DefaultLayout() {



  return(
    <div className="main-container">
      <Nav />
      <Personaje />
      <Footer />
    </div>
  )
}
