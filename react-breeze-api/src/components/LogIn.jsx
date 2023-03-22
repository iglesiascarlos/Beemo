import cruz from '../assets/cruz.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useAuthContext from '../context/AuthContext';


export default function LogIn () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors} = useAuthContext();

  const handleLogin = async (event) => {
      event.preventDefault();
      login({ email, password });
  }

  return (
      <div className='popup-register-login'>
          <div className='popup'>
                  <div className='titulo-popup'>
                  <div className="titulo-content">
                      <h2>LogIn</h2>
                      <Link to='/'>
                              <img src={cruz} alt="boton cruz cerrar popup" />
                      </Link>
                  </div>
              </div>

              <div className="body-popup">
                  <div className="body-popupform">

                      <form className='popupform' onSubmit={handleLogin}>
                        <input 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder='Email' 
                          className="input email" 
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
                          placeholder='Password' 
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
                        <button className='button-30 button-form' >Login</button>
                      </form>
                      
                      <Link to='/register'>
                          <button className='button-30 button-form' >Register</button>
                      </Link>
                      <Link to='/password'>
                          <button className='button-30 button-form' >New Password</button>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  )
}
