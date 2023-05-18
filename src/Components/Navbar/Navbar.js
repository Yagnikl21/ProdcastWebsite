import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <img src='../Images/logo.png' alt='logo'/>

            <div className='menu'>
                <Link>Episodes</Link>
                <Link>About</Link>
                <Link>More</Link>
            </div>
        </div>
        <div className='right'>
            <button className="btn-1">RECENT EPISODES</button>
            <button className='btn-2'>SUBCRIBE</button>
        </div>
    </div>
  )
}
