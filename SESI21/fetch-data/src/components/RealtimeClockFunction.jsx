import React, { useState, useEffect } from "react";
import '../components/Clock.css';

//Function
export default function RClockFunction() {
    const [date, setDate] = useState(new Date())
    // const [interval] = useState(setInterval(() => { tick() }, 1000))

    // useEffect(() => {
    //     const interval = setInterval(() => { tick() }, 1000)
    // })

    function tick() {
        setDate(new Date())
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return function () {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <div className="my-clock">
                <h3>Realtime CLOCK</h3>
                <div className="time"
                > {date.toLocaleTimeString()}
                </div>
            </div>
        </>
    );
}