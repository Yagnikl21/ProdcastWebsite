import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './page/Home/Home'
import About from './page/About/About'
import Podcast from './page/PodcastPage/Podcast'

export default function App() {
  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='podcast/:id' element={<Podcast />} />
    </ Routes >
  )
}
