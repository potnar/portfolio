import React, { useEffect, useState } from 'react';
import "./Loader.scss"

function Loader() {
    const [dot, setDot] = useState("")

    useEffect(() => {
        const dotting = setInterval(() => {
            setDot(dot + ".")
        }, 500);
        if (dot === ".....") {
            setDot("")
        }
        return () => clearInterval(dotting);
    });
    return (
        <>
            <div className="spinner">
                <span className="spinner-inner-1"></span>
                <span className="spinner-inner-2"></span>
                <span className="spinner-inner-3"></span>
            </div>
            <div className="loading">loading{dot}</div>
        </>
    );
}

export default Loader;