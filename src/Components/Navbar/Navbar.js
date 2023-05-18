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
    // Close the dropdown menu when the window is resized
    setDropdownOpen(false);
  };

  const handleOutsideClick = (event) => {
    // Close the dropdown menu when the user clicks outside
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu && !dropdownMenu.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  return (
    <div className='navbar'>
      <div className='left'>
        <img src='../Images/logo.png' style={stlye} alt='logo' />
        {/* <div className={`menu collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}> */}
        <div className="menu">
          <Link>Episodes</Link>
          <Link>About</Link>
          <Link>More</Link>
        </div>
        {/* </div> */}



      </div>
      <div className='right'>
        {/* <span className={`button collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}> */}
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
            <li><Link>Episodes</Link></li>
            <hr />
            <li><Link>About</Link></li>
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

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.scss';

// export default function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="left">
//         <img src="../Images/logo.png" alt="logo" />

//         <button
//           className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
//           type="button"
//           onClick={toggleMenu}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//       </div>

//       <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to="/" className="nav-link" onClick={closeMenu}>
//               Episodes
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about" className="nav-link" onClick={closeMenu}>
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/more" className="nav-link" onClick={closeMenu}>
//               More
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* <div className="right"> */}
//         <div className={`right collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
//           <button className="btn-1" >RECENT EPISODES</button>
//           <button className="btn-2">SUBSCRIBE</button>
//         {/* </div> */}
//       </div>
//     </nav >
//   );
// }
