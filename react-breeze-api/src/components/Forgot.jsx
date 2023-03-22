import cruz from '../assets/cruz.svg'
import { Link } from "react-router-dom"
import { useState } from 'react'
import useAuthContext from '../context/AuthContext';
import axios from '../api/axios';

export default function Forgot (){
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);
    const { csrf } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await csrf();
        setErrors([])
        setStatus(null)
        try {
            const response = await axios.post("/forgot-password", { email })
            setStatus(response.data.status)
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }

    }

    return (
        <div className="popup-register-login">
            <div className='popup'>
                <div className='titulo-popup'>
                    <div className="titulo-content">
                        <h2>Forgot password</h2>
                            <Link to='/'>
                                <img src={cruz} alt="boton cruz cerrar popup" />
                            </Link>
                    </div>
                </div>

            <div className="body-popup">
                <div className="body-popupform">
                    {status && <div className="mail-password">{status}</div>}
                    <form className='popupform' onSubmit={handleSubmit}>
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
                        <button className='button-30 button-form' >Forgot Password</button>
                    </form>

                        <Link to='/register'>
                            <button className='button-30 button-form' >Register</button>
                        </Link>
                        <Link to='/password'>
                            <button className='button-30 button-form' >Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
