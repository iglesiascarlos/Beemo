import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Personaje from "../components/Personaje";

import { useEffect } from "react"
import useAuthContext from "../context/AuthContext"


export default function DefaultLayout() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
      if (!user) {
          getUser();
      }
  }, []);


  return(
    <div className="main-container">
      <div>{user?.name}</div>
      <Nav />
      <Personaje />
      <Footer />
    </div>
  )
}
