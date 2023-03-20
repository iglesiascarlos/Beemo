import Popup from 'reactjs-popup';
import cruz from '../assets/cruz.svg'
import help from '../assets/help-icon-6f23fd1a.svg'
import uno from '../assets/1.svg'
import dos from '../assets/2.svg'
import tres from '../assets/3.svg'

export default function Help(){
  return (
    <Popup
      trigger={<img src={help} alt="icono ayuda de como jugar con beemo" />}
      modal
      nested
    >
    {close => (
      <div className='popup'>
        <div className='titulo-popup'>
          <div className="fondo-blanco"></div>
          <div className="fondo-gris"></div>
          <div className="titulo-content">
            <h2>¿ Como se usa Beemo ?</h2>
            <button className="close" onClick={close}>
              <img src={cruz} alt="boton cruz cerrar popup" />
            </button>
          </div>
        </div>

        <div className="body-popup-help">
          <img className='numeros' src={uno} alt="svg numero 1"/>
          <p className='texto-numero'>Elige el tipo de excusa que deseas generar</p>
          <img className='numeros' src={dos} alt="svg numero 1"/>
          <p className='texto-numero'>Genera la excusa usando el boton</p>
          <img className='numeros' src={tres} alt="svg numero 1"/>
          <p className='texto-numero'>Beemo te dirá tu excusa, puedes guardarla en favoritos</p>
        </div>
      </div>
    )}
    </Popup>
  )
}
