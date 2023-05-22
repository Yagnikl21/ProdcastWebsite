import { useEffect, useState } from 'react';
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const stlye = {
    marginBottom: isDropdownOpen ? '50px' : '0'
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleWindowResize = () => {
    setDropdownOpen(false);
  };

  const handleOutsideClick = (event) => {
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu && !dropdownMenu.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  return (
    <div className='navbar'>
      <div className='left'>
        <NavLink to="/"><img src='../Images/logo.png' style={stlye} alt='logo' /></NavLink>
        <div className="menu">
          <NavLink to='/podcast/1' style={({ isActive }) => ({
            color: isActive ? '#161616' : '#4D4D4D',
            textDecoration: isActive ? 'underline' : 'none'
          })}>Episodes</NavLink>
          <NavLink to='/about' style={({ isActive }) => ({
            color: isActive ? '#161616' : '#4D4D4D',
            textDecoration: isActive ? 'underline' : 'none'
          })} >About</NavLink>
          <NavLink to='/blog' style={({ isActive }) => ({
            color: isActive ? '#161616' : '#4D4D4D',
            textDecoration: isActive ? 'underline' : 'none'
          })} >Blog</NavLink>
        </div>
      </div>
      <div className='right'>
        <Link to={`${window.location.pathname}#Recent`}>
          <button className="btn-1">RECENT EPISODES</button>
        </Link>
        <button className='btn-2'>SUBCRIBE</button>
        <button
          className={`navbar-toggler`}
          type="button"
          onClick={toggleDropdown}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {isDropdownOpen && (
        <div className="dropdown-content">
          <ul>
            <li><NavLink to='/podcast/1'>Episodes</NavLink></li>
            <hr />
            <li><NavLink to='/about' >About</NavLink></li>
            <hr />
            <li><NavLink>More</NavLink></li>
            <hr />
            <li><button className="btn-1">RECENT EPISODES</button></li>
            <hr />
            <li><button className='btn-2'>SUBCRIBE</button></li>
          </ul>
        </div>
      )}

    </div>
  )
}