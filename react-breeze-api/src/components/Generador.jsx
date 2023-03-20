

export default function Generador (){
  return (
    <form action="">
      <button className="button-30">Generar</button>
      <select className="tipo-excusas" id="tipo-excusas">
        <option defaultValue value="family">Family</option>
        <option value="office">Office</option>
        <option value="children">Children</option>
        <option value="college">College</option>
        <option value="party">Party</option>
        <option value="funny">Funny</option>
        <option value="unbelievable">Unbelievable</option>
        <option value="developers">Developers</option>
        <option value="gaming">Gaming</option>
      </select>
    </form>
  )
}
