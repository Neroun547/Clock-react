import React, { useState, useEffect } from 'react';
import "./css/style.css";

export function Clock(props) {
    const [seconds, setSeconds] = useState('');
    const [minutes, setMinutes] = useState('');
    const style = {
        transform: `rotate(${(String(props.time%12*30) + 'deg')})`,
        transformSmall:`rotate(${(String(seconds) + 'deg')})`,
        transformMiddle:`rotate(${(String(minutes) + 'deg')})`
    }
    useEffect(() => {
        let second;
        let minute;
        setInterval(() => {
            second = new Date().getSeconds();
            minute = new Date().getMinutes();
            setSeconds(second * 6);
            setMinutes(minute * 6);
        })
    }, [])
    return (
        <>
        <div className="wrapper-clock">
            <div className="circle"></div>
            <div className="time time-12">12</div>
            <div className="time time-1">1</div>
            <div className="time time-2">2</div>
            <div className="time time-3">3</div>
            <div className="time time-4">4</div>
            <div className="time time-5">5</div>
            <div className="time time-6">6</div>
            <div className="time time-7">7</div>
            <div className="time time-8">8</div>
            <div className="time time-9">9</div>
            <div className="time time-10">10</div>
            <div className="time time-11">11</div>
            <div className="arrow-big" style={{transform:style.transform}}>
                <div className="decoration-right"></div>
                <div className="decoration-left"></div>
            </div>
            <div className="arrow-middle" style={{transform:style.transformMiddle}}>
                <div className="decoration-right"></div>
                <div className="decoration-left"></div>
            </div>
            <div className="arrow-small" style={{transform:style.transformSmall}}>
                <div className="decoration-right"></div>
                <div className="decoration-left"></div>
            </div>
        </div>
        </>
    )
}
