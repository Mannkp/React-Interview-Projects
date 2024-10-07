import { useEffect } from 'react';
import './style.css';
import { useState } from 'react';
import { useCallback } from 'react';

function ScrollIndicator({ size = 4, color = 'red' }) {

    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = useCallback(() => {
        //de.st (final/last) + de.ch = de.sh
        //b.st = 0 

        //percentage = scroll amount from top / overall height of document - height of user screen
        const percentage = Math.round(((document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100);

        setScrollPercentage(percentage);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return (() => window.removeEventListener("scroll", handleScroll));
    })

    return (
        <div className='ProgressBar-Container'>
            <div className="progressBar" style={{ width: `${scrollPercentage}%`, height: `${size / 10}rem`, background: `${color}` }}></div>
        </div>
    )
}

export default ScrollIndicator