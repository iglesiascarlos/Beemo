import cruz from '../assets/cruz.svg'
import { Link } from "react-router-dom"

export default function Reset (){
    return (
        <div className="popup-register-login">
            <div className='popup'>
                <div className='titulo-popup'>
                <div className="titulo-content">
                    <h2>Reset Password</h2>
                    <Link to='/'>
                        <img src={cruz} alt="boton cruz cerrar popup" />
                    </Link>
                </div>
                </div>

                <div className="body-popup">
                <div className="body-popupform">
                    <form className='popupform'>
                        
                        <input placeholder='Username or Email' className='input email' type="text" />

                        <button className='button-30 button-form' >Reset Password</button>

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
