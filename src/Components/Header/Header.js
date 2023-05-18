import Cover from '../Cover/Cover'
import Navbar from '../Navbar/Navbar'
import './Header.scss'

export default function Header() {
  return (
    <div className='Header'>
      <Navbar />
      <img className='img-1' src='./Images/bg-1.svg' alt='bg-1' />
      <img className='img-2' src='./Images/bg-2.png' alt='bg-2' />
      <h1>Your Daily</h1>
      <h1 className='second'>Podcast</h1>
      <p>We cover all kinds of categories and</p>
      <p>a weekly special guest.</p>
      <button className='btn--2'>SUBCRIBE</button>
      <Cover />

      <div className='support'>
          <h4>Support by:</h4>
          <div className='support-logo'>
              <img src='../Images/Spotify.png' alt='Spotify' />
              <img src='../Images/Google.png' alt='Google' />
              <img src='../Images/Youtube.png' alt='youtube' />
          </div>
      </div>

      <img className='bg-3' src="./Images/Scribble.png" alt="Scribble" />
    </div>
  )
}
