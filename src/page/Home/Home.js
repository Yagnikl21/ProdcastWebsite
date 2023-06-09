import './Home.scss'
import Header from '../../Components/Header/Header'
import AboutCom from '../../Components/AboutCom/AboutCom'
import Comment from '../../Components/Comment/Comment'
import Membership from '../../Components/Membership/Membership'
import Recent from '../../Components/Recent/Recent'
import Footer from '../../Components/Footer/Footer'

export default function App() {
  return (
    <div className='home'>
      <Header />
      <AboutCom />
      <Comment />
      {/* <img className='bg--3' src="./Images/Vector 29.png" alt="Scribble" /> */}
      <Membership />
      {/* <img className='bg-4' src="./Images/Vector 29.png" alt="Scribble" />  */}
      <Recent />
      <Footer />
    </div>
  )
}
