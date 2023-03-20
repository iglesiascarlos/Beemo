import beemo from '../assets/beemo-0fa1147e.svg'
import Excuse from './Excuse'
import Generador from './Generador'


export default function Personaje() {
  return (
    <main>
      <div className="beemo-box">
        <Excuse />
        <img className="beemo" src={beemo} alt="personaje BMO saludando" />
        <Generador />
      </div>
    </main>
  )
}
