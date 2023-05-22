import React from 'react'
import Header from '../../Components/Header/Header4'
import Footer from '../../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import BlogData from '../../Data2'
import './SingleBlog.scss'

export default function SingleBlog() {

    const { id } = useParams();
    const data = parseInt(id);

    const display = BlogData.filter(e => e.id === data)

    const Screen = display.map((m) => {
        return(
            <div className='details' key={m.id}>
                <img src={m.src} alt='Blog' />
                <h1>Blog Details goes hear</h1>
            </div>
        )
    })

    return (
        <div className='singleBlog'>
            <Header />
            { Screen }
            <Footer />
        </div>
    )
}
