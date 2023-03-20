import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Personaje from "../components/Personaje";
import useAuthContext from "../context/AuthContext";


export default function DefaultLayout() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [])


  return(
    <div className="main-container">
      <p>{user?.name}</p>
      <Nav />
      <Personaje />
      <Footer />
    </div>
  )
}
