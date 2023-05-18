import './about_com.scss';

export default function AboutCom() {
  return (
    <div className='about_com'>
      <h1>Talk. Listen. Get inspired</h1>
      <h1>by every minute of it.</h1>

      <div className='ideas'>
        <div className='idea-box'>
          <img src='./Images/Illustration 01.svg' alt='illitration' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
        </div>

        <div className='idea-box'>
          <img src='./Images/Illustration 02.svg' alt='illitration' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.  </p>
        </div>
      </div>

      <div className='coat'>
        <img className='bg-4' src='./Images/Vector 4.png' alt="vector4" />
        <img className='bg-5' src='./Images/Star 4.png' alt="vector5" />
        <h1><b>
          “
        </b></h1>
        <h2>One of the best daily podcasts that</h2>
        <h2>covers every topic on Spotify.</h2>
        <span>
          <img src="./Images/avatar.png" alt="profile" />
          <p> John Smith,</p>
          <img className='logo-spotify' src="./Images/vector.png" alt="spofify" />
          <p><b>Social Community Manager</b></p>
        </span>
      </div>

      <img className='bg-3' src="./Images/Vector 29.png" alt="Scribble" />
    </div>
  )
}
