import './App.scss'
import Header from './Components/Header/Header'
import AboutCom from './Components/AboutCom/AboutCom'
import Comment from './Components/Comment/Comment'
import Membership from './Components/Membership/Membership'
import Recent from './Components/Recent/Recent'

export default function App() {
  return (
    <div className='app'>
        <Header />
        <AboutCom />
        <Comment />
        <img className='bg--3' src="./Images/Vector 29.png" alt="Scribble" />
        <Membership />
        <img className='bg-4' src="./Images/Vector 29.png" alt="Scribble" />
        <Recent />
    </div>
  )
}
