import Popup from 'reactjs-popup';
import favs from '../assets/fav-icon-2e58ffbf.svg'
import cruz from '../assets/cruz.svg'

export default function Favs () {
    return (
      <Popup
        trigger={<img src={favs} alt="icono ayuda de como jugar con beemo" />}
        modal
        nested
      >
      {close => (
        <div className='popup'>
          <div className='titulo-popup'>
            <div className="fondo-blanco"></div>
            <div className="fondo-gris"></div>
            <div className="titulo-content">
              <h2>Favoritos</h2>
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
