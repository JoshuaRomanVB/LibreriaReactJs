import '@styles/Navbar.scss'
import burger from '@assets/burger.ico'
import cart from '@assets/cart.png'
import React,{ useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '@assets/logo.png'
import SearchResults from './SearchResults';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === 'true');

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim().length === 0) {
      alert("Por favor escribe algo antes de buscar");
      return;
    }
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data.items);
        navigate(`/search-results/${searchTerm}`);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo-nav" className="me-2 logo-nav" />
            Book Nook
          </Link>
          <form className="d-flex mx-auto" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {isLoggedIn ? (
            <div className="d-flex">
              <Link to="/micuenta" className="btn btn-outline-secondary me-2">
                Profile
              </Link>
              <Link to="/login" className="btn btn-outline-secondary" onClick={handleLogout}>
                Logout
              </Link>
            </div>
          ) : (
            <div className="d-flex">
              <Link to="/login" className="btn btn-outline-secondary">
                Iniciar sesión
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
