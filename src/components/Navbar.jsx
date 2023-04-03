import '@styles/Navbar.scss'
import logo from '@assets/televisa.png'
import burger from '@assets/burger.ico'
import cart from '@assets/cart.png'
import Menu from '@Components/Menu.jsx'
import React,{ useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import MiOrdenCo from './MiordenCo'
import MenuCat from './MenuCat'


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
 <nav>
            <img src={burger} width="24" height="24" alt="menu" className="menu" onClick={toggleNav}/>
        <div className="navbar-izquierda">
            <img src={logo} width="24" height="24" alt="logo" className="logo"/>
            <ul>
                <li><a href="/">Todos</a></li>
                <li><a href="/">Ropa</a></li>
                <li><a href="/">Electronica</a></li>
                <li><a href="/">Muebles</a></li>
                <li><a href="/">Juguetes</a></li>
                <li><a href="/">otros</a></li>
            </ul>
        </div>
        <div className="navbar-derecha">
            <ul>
                <li className="navbar-email">  <a onClick={toggleComponente} >chochua@vazquez.com</a></li>
                <li className="navbar-carrito">
                    <img src={cart} width="24" height="24" alt="carrito" className="carrito" onClick={toggleMiorden}/>
                    {state.carrito.length > 0? <div className='carritounidades'>{state.carrito.length}</div>: null}
                </li>
            </ul>
        </div>
    </nav>

    {mostrarComponente2 && <MiOrdenCo/>}
    {mostrarComponente && <Menu/>}

    {mostrarNav && <MenuCat/>}
        </div>
       
    );
}

export default Header;