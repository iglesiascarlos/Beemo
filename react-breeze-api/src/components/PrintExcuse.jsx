import fav from '../assets/no-fav.svg'


export default function PrintExcuse (){
  return (
    <div className="excuse-component">
      <h3 className="excuse-title">Trabajo</h3>
      <p className="excuse-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis recusandae autem voluptatibus nobis dignissimos?</p>
      <img src={fav} alt="icono corazon" />
    </div>
  )
}
