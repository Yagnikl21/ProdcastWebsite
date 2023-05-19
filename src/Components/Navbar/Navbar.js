import { useEffect, useState } from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const stlye = {
    marginBottom : isDropdownOpen ? '50px' : '0'
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
        <Link to="/"><img src='../Images/logo.png' style={stlye} alt='logo' /></Link>
        <div className="menu">
          <Link to='/podcast/1'>Episodes</Link>
          <Link to='/about' >About</Link>
          <Link>More</Link>
        </div>
      </div>
      <div className='right'>
        <button className="btn-1">RECENT EPISODES</button>
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
            <li><Link to='/podcast/1'>Episodes</Link></li>
            <hr />
            <li><Link to='/about' >About</Link></li>
            <hr />
            <li><Link>More</Link></li>
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