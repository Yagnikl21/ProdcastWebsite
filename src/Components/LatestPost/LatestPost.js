import React from 'react'
import BlogData from '../../Data2'
import './LatestPost.scss'
import { Link } from 'react-router-dom'


export default function LatestPost() {

    const display = BlogData.map((a) => {
        return (
            <div className='col-sm-12 col-md-12 col-lg-6 col-xxl-4' key={a.id}>
                <Link to={`${a.id}`}>
                    <div className='episodes-card'>

                        <div className='first'>
                            <img src={a.src} alt={a.src} />
                            <h6>{a.type}</h6>
                            <h4>{a.title}</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                        </div>
                        <div className='second'>
                            <div className='left'>
                                <button>Covid-19</button>
                                <button>health</button>
                            </div>
                            <div className='right'>
                                {a.date}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className='latestPost'>
            <div className='recent-container'>
                <h1>Latest Post</h1>
                <nav className='recent-navbar'>
                    <ul>
                        <li><Link>All</Link></li>
                        <li><Link>Business</Link></li>
                        <li><Link>Comedy</Link></li>
                        <li><Link>Education</Link></li>
                        <li><Link>Health</Link></li>
                        <li><Link>News</Link></li>
                        <li><Link>Tech</Link></li>
                    </ul>
                </nav>

                <hr />
            </div>
            <div className='recent-episodes row'>
                {display}
            </div>

            <button className='btn--2'>SEE PRICING</button>

        </div>
    )
}
