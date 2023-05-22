import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import './Header4.scss'
import BlogData from '../../Data2';

export default function Header() {
    const style = {
        paddingBottom: '100px'
    }

    const { id } = useParams();
    const data = parseInt(id);

    const display = BlogData.filter(e => e.id === data)

    console.log(display);

    const Screen = display.map((m) => {
        return (
            <>
                <div className='back' key={m.id}>
                    <span>
                        <img src='../Images/Blog/Arrow.png' alt='Arrow' />
                        <Link to=".." relative='path'>
                            <p>Back to articles</p>
                        </Link>
                    </span>
                    <p>{m.date}</p>
                </div>
                <h5>{m.type}</h5>
                <h1 className='second'>{m.title}</h1>
            </>
        )
    })

    return (
        <div className='Header-4' style={style}>
            <Navbar />
            {/* <img className='img-1' src='./Images/bg-1.svg' alt='bg-1' />
      <img className='img-2' src='./Images/bg-2.png' alt='bg-2' /> */}
            { Screen }
        </div>
    )
}
