import cruz from '../assets/cruz.svg'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import useAuthContext from '../context/AuthContext';

export default function Register () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { register, errors } = useAuthContext();

  const handleRegister = async (event) => {
      event.preventDefault();
      register({ name, email, password, password_confirmation });
  }

  return (
    <div className="popup-register-login">
      <div className='popup'>
        <div className='titulo-popup'>
          <div className="titulo-content">
            <h2>Register</h2>
              <Link to='/'>
                <img src={cruz} alt="boton cruz cerrar popup" />
              </Link>
          </div>
        </div>

        <div className="body-popup">
          <div className="body-popupform">
            <form className='popupform' onSubmit={handleRegister}>
              <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Nombre' 
                className='input name' 
                type="text"  
              />
              {errors.name && (
                <div>
                  <span className="error">
                    {errors.name[0]}
                  </span>
                </div>
              )}
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email' 
                className='input email' 
                type="text" 
              />
              {errors.email && (
                <div>
                  <span className="error">
                    {errors.email[0]}
                  </span>
                </div>
              )}
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Contraseña' 
                className='input password' 
                type="password" 
              />
              {errors.password && (
                <div>
                  <span className="error">
                    {errors.password[0]}
                  </span>
                </div>
              )}
              <input 
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder='Confirmación Contraseña' 
                className='input password' 
                type="password" 
              />
              <button className='button-30 button-form' >Register</button>
            
            </form>
            <Link to='/login'>
              <button className='button-30 button-form' >Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
