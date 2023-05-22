import React from 'react'
import Header from '../../Components/Header/Header3'
import LatestPost from '../../Components/LatestPost/LatestPost'
import Footer from '../../Components/Footer/Footer'

export default function Blog() {
  return (
    <div className='blog'>
        <Header />
        <LatestPost />
        <Footer />
    </div>
  )
}
