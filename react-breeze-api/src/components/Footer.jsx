import twitter from '../assets/twitter-521441f5.svg'
import facebook from '../assets/facebook-0e05255c.svg'
import github from '../assets/github-f1e611ec.svg'
import youtube from '../assets/youtube-3581d328.svg'


export default function Footer() {
  return (
    <footer>
      <img src={facebook} alt="icono facebook" />
      <img src={youtube} alt="icono youtube" />
      <img src={github} alt="icono github" />
      <img src={twitter} alt="icono twitter" />
    </footer>
  )
}
