import './Membership.scss'

export default function Membership() {
    return (
        <div className="membership">
            <div className='membership-container'>
                <img src='./Images/Scribble (1).png' alt='Sparkle' />
                <h1>Membership benefits</h1>
                <p>Become our sponsor and get all benefits</p>
            </div>

            <div className='membership-card'>
                <div className='mCard'>
                    <img className='m_Image' src='./Images/M_3.png' alt='M_1.png' />
                    <h4>Topic by Request</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='mCard'>
                    <img className='m_Image' src='./Images/M_2.png' alt='M_1.png' />
                    <h4>Exclusive Content</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='mCard'>
                    <img className='m_Image' src='./Images/M_6.png' alt='M_1.png' />
                    <h4>Join the Community</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='mCard'>
                    <img className='m_Image' src='./Images/M_5.png' alt='M_1.png' />
                    <h4>Livestreaming Access</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='mCard'>
                    <img className='m_Image' src='./Images/M_4.png' alt='M_1.png' />
                    <h4>Exclusive Episodes & Merch</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='mCard'>
                    <img className='m_Image' src='./Images/M_1.png' alt='M_1.png' />
                    <h4>And much more!</h4>
                    <p>Lorem ipsum dolor sit amet consectet pis
                        cing elit, sed do eiusmod tempor.</p>
                </div>
            </div>

            <button className='btn--2'>SEE PRICING</button>
            
        </div>
    )
}
