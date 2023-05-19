import './Cover.scss'
import array from '../../Data'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

export default function Cover() {

    const coverRef = useRef(null);

    useEffect(() => {
        const coverWrapper = coverRef.current;
        if (coverWrapper) {
            coverWrapper.scrollLeft = (coverWrapper.scrollWidth - coverWrapper.clientWidth) / 2;
        }
    }, []);

    const cover = array.map((a) => {
        return (
            <div className='cover-image' key={a.id}>
                <Link to={`/podcast/${a.id}`}>
                    <img src={a.src} alt="cover" />
                </Link>
            </div>
        )
    })

    return (
        <div className='cover' ref={coverRef}>
            {cover}
        </div>
    )
}
