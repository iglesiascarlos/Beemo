import { Navigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";


export default function Profile () {

  const { user, logout } = useAuthContext();


    return (
      <div className="profile">
        {user ? (
            <div className="exist-profile">
              <div>{user?.name}</div>
              <button onClick={logout}>Logout</button>
            </div>
            ) : (
              <Navigate to="/login" />
            )}
      </div>
    )
  }
