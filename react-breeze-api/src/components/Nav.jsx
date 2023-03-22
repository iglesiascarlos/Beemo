import Help from '../components/Help'
import Favs from '../components/Favs';
import Historial from '../components/Historial';
import register from '../assets/register-icon-771c5d36.svg'

import useAuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Nav() {
    const { user } = useAuthContext();

    return (
        <header>
            <Help />
            <Favs />
            <Historial />
            {user ? (
            <Link to="/user">
                <img src={register} alt="icono ayuda de como jugar con beemo" />
            </Link>
            ) : (
            <Link to="/login">
                <img src={register} alt="icono ayuda de como jugar con beemo" />
            </Link>
            )}
        </header>
    )
}
