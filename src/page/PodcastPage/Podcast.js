import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Podcast.scss';
import Footer from '../../Components/Footer/Footer';

export default function Podcast() {

    const { id } = useParams();
    const i = id ? id : 1;
    console.log(i);

    return (
        <div className='podcast'>
            <Navbar />
            <div className='podcast-container'>
                <img src={`../Images/cover-${i}.png`} alt='no'></img>
                <div className='podcast-info'>
                    <h4>Episode 1</h4>
                    <h2>Are you a Perplexed Mind Person?</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                    <div className='user'>
                        <span>
                            <img src="../Images/avatar.png" alt='no'></img>
                            <p>Hosted by: Jane Doe</p>
                        </span>
                        <p>Sep 22, 2021</p>
                    </div>
                    <span>
                        <button className='btn-2'>SUBCRIBE</button>
                        <button className="btn-1">LISTEN NOW</button>
                    </span>
                </div>


            </div>
            <div className='tag'>
                <p>Tag : </p>
                <span>
                    <button>Mind-behaviour</button>
                    <button>Health</button>
                </span>
            </div>

            <Footer />
        </div>
    )
}
