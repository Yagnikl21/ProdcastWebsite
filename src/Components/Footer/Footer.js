import './Footer.scss'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='top'>
                <h1>Available now<br />
                    Pod of Cast App</h1>
                <p>We just launched our podcast app!</p>
                <button className='btn--2'>SEE PRICING</button>
                <p className='f-p'>Content also available on:</p>
                <span className='logos'>
                    <img src='../Images/google-f.png' alt='google-f.png' />
                    <img src='../Images/spotify-f.png' alt='spotify-f.png' />
                    <img src='../Images/youtube-f.png' alt='youtube-f.png' />
                </span>
            </div>
            <div className='down'>
                <div className='d-top'>
                    <div className="fd-1">
                        <img src="../Images/logo.png" className='img-l' alt='log' ></img>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                        <span>
                            <img src="../Images/twitter.png" alt='twitter' ></img>
                            <img src="../Images/tiktok.png" alt='tiktok' ></img>
                            <img src="../Images/instagram.png" alt='instagram' ></img>
                        </span>
                    </div>
                    <span className="mobile-f">
                        <div className="fd-2">
                            <ul>
                                <li>About</li>
                                <li>Testimonials</li>
                                <li>Fachures</li>
                            </ul>
                        </div>
                        <div className="fd-3">
                            <ul>
                                <li>Episode</li>
                                <li>Pricing</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </span>
                    <div className="fd-4">
                        <p>Listen to episodes on your fav platform:</p>
                        <div className='support-logo'>
                            <img src='../Images/Spotify.png' alt='Spotify' />
                            <img src='../Images/Google.png' alt='Google' />
                            <img src='../Images/Youtube.png' alt='youtube' />
                        </div>
                        <p>App available on:</p>
                        <span className="avilable">
                            <img src='../Images/app_store.png' className="app" alt='youtube' />
                            <img src='../Images/google_play.png' alt='youtube' />
                        </span>
                    </div>
                </div>

                <hr />

            </div>

        </div>
    )
}
