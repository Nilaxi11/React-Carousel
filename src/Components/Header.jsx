import { Link } from 'react-router-dom'
import '../Components/Header.css' // optional styling

function Header() {
  return (
    <nav className="navbar">
      <h2>Carousel Demo</h2>
      <ul>
        <li><Link to="/swiper">Swiper</Link></li>
        <li><Link to="/glider">Glider</Link></li>
        <li><Link to="/splide">Splide</Link></li>
        <li><Link to="/nuka">Nuka</Link></li>
        <li><Link to="/keen">Keen</Link></li>
      </ul>
    </nav>
  )
}

export default Header