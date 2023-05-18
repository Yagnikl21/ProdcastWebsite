import './Cover.scss'
import array from '../../Data'
import { useEffect, useRef } from 'react'

export default function Cover() {

    const coverRef = useRef(null);

    useEffect(() => {
        console.log("Hello i am running");
        const coverWrapper = coverRef.current;
        if (coverWrapper) {
            coverWrapper.scrollLeft = (coverWrapper.scrollWidth - coverWrapper.clientWidth) / 2;
        }
    }, []);

    const cover = array.map((a) => {
        return (
            <div className='cover-image' >
                <img src={a.src} alt="cover" />
            </div>
        )
    })

    return (
        <div className='cover' ref={coverRef}>
            {cover}
        </div>
    )
}
