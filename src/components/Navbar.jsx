import '@styles/Navbar.scss'
import burger from '@assets/burger.ico'
import cart from '@assets/cart.png'
import Menu from '@Components/Menu.jsx'
import React,{ useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import MiOrdenCo from './MiordenCo'
import MenuCat from './MenuCat'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '@assets/logo.png'

const Header = () => {

 

    const [mostrarComponente, setMostrarComponente] = useState(false);
    const toggleComponente = () => {
      setMostrarComponente(!mostrarComponente);
    };

    const [mostrarNav, setMostrarNav] = useState(false);
    const toggleNav = () => {
      setMostrarNav(!mostrarNav);
    };

    const [mostrarComponente2, setMostrarComponente2] = useState(false);
    const toggleMiorden = () => {
      setMostrarComponente2(!mostrarComponente2);
    };

    const {state} = useContext(AppContext)

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 640) {
            setMostrarNav(false)
            setMostrarComponente(false)
          } 
        };
    
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);



    return (
        <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo-nav" className="me-2 logo-nav" />
          My Bookshelf
        </Link>
        <form className="d-flex mx-auto">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="d-flex">
          <Link to="/profile" className="btn btn-outline-secondary me-2">Profile</Link>
          <Link to="/library" className="btn btn-outline-secondary">Library</Link>
        </div>
      </div>
    </nav>

    {mostrarComponente2 && <MiOrdenCo/>}
    {mostrarComponente && <Menu/>}

    {mostrarNav && <MenuCat/>}
        </div>
       
    );
}

export default Header;