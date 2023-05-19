import './Recent.scss'
import array from '../../Data'

export default function Recent() {

    const display = array.map((a) => {
        return (
            <div className='col-sm-12 col-md-6 col-lg-6 col-xxl-4' key={a.id}>
                <div className='episodes-card'>

                    <div className='first'>
                        <img src={a.src} alt={a.src} />
                        <span>
                            <h4>Eps 4</h4>
                            <h4>Pandemic Becoming Endemic</h4>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. </p>
                        </span>
                    </div>
                    <div className='second'>
                        <div className='left'>
                            <button>Covid-19</button>
                            <button>health</button>
                        </div>
                        <div className='right'>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='recent'>
            <div className='recent-container'>
                <h1>Recent Episodes</h1>
                <p>Available on your favorite platform</p>
            </div>
            <div className='recent-episodes row'>
                {display}
            </div>

            <button className='btn--2'>SEE PRICING</button>

        </div>
    )
}


