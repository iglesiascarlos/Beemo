import Popup from 'reactjs-popup';
import cruz from '../assets/cruz.svg'
import history from '../assets/history-icon-547cdf08.svg'

export default function Historial () {
  return (
    <Popup
      trigger={<img src={history} alt="icono ayuda de como jugar con beemo" />}
      modal
      nested
    >
    {close => (
      <div className='popup'>
        <div className='titulo-popup'>
          <div className="fondo-blanco"></div>
          <div className="fondo-gris"></div>
          <div className="titulo-content">
            <h2>Historial</h2>
            <button className="close" onClick={close}>
              <img src={cruz} alt="boton cruz cerrar popup" />
            </button>
          </div>
        </div>

        <div className="body-popup">
          <h2>Proximamente</h2>
        </div>
      </div>
    )}
    </Popup>
  )
}
