import Header from '../../Components/Header/Header2'
import Footer from '../../Components/Footer/Footer'
import './About.scss'

export default function About() {
    return (
        <div className='about'>
            <Header />
            <div className='aboutContainer'>
                <div className='offers'>
                    <div className='offer-card'>
                        <h1>76K</h1>
                        <p>Community Members</p>
                    </div>
                    <div className='offer-card'>
                        <h1>128K</h1>
                        <p>Podcast Subscribers</p>
                    </div>
                    <div className='offer-card'>
                        <h1>59K</h1>
                        <p>Daily Listeners</p>
                    </div>
                </div>

                <div className='comment-container'>
                    <h1>What our Listen says</h1>
                    <p>Their experience throughout every platform</p>
                </div>
                <img src='./Images/img.png' alt="img" />

                <h3>About and History</h3>
                <div className='info row'>
                    <div className='col-md-12 col-lg-6'>
                        <p>Eu non diam phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam elementum pulvinar.

                            Elementum eu facilisis sed odio morbi quis commodo.
                            <br />
                            Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.</p>
                    </div>
                    <div className='col-md-12 col-lg-6'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim eget.
                            <br />
                            Viverra at porttitor accumsan. Orci non here</p>
                    </div>
                </div>
                <hr />
                <h3>Founder and Main Host</h3>
                <span className='two-photo'> 
                    <img src="./Images/1.png" alt="Images" />
                    <img src="./Images/2.png" alt="Images" />
                </span>
            </div>
            <Footer />
        </div>
    )
}
