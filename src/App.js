import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './page/Home/Home'
import About from './page/About/About'
import Podcast from './page/PodcastPage/Podcast'
import Blog from './page/Blog/Blog'
import SingleBlog from './page/SingleBlog/SingleBlog'

export default function App() {
  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='podcast/:id' element={<Podcast />} />
      <Route path='blog' element={<Blog />} />
      <Route path='blog/:id' element={<SingleBlog />} />
    </ Routes >
  )
}
