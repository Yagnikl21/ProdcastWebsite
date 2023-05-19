import Navbar from '../Navbar/Navbar'
import './Header2.scss'

export default function Header() {
  return (
    <div className='Header-2'>
      <Navbar />
      <img className='img-1' src='./Images/bg-1.svg' alt='bg-1' />
      <img className='img-2' src='./Images/bg-2.png' alt='bg-2' />
      <h1>About</h1>
      <h1 className='second'>Pod of Cast</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt</p>
      <p>ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.</p>
      <span >
        <button className='btn--1'>BECOME SPONSOR</button>
        <button className='btn--2'>SUBCRIBE</button>
      </span>
    </div>
  )
}
