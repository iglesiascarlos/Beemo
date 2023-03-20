import Help from '../components/Help'
import Favs from '../components/Favs';
import Historial from '../components/Historial';
import register from '../assets/register-icon-771c5d36.svg'

export default function Nav() {

    return (
        <header>
            <Help />
            <Favs />
            <Historial />
            <img src={register} alt="icono ayuda de como jugar con beemo" />
        </header>
    )
}
