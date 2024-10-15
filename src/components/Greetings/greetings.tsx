import React, { useEffect, useState } from "react";


export const Greetings: React.FC = () => {
    const locale = 'en';
    const [date, setDate] = useState(new Date());
    const hour = date.getHours();
    const greetings = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || (hour < 21 && 'Evening') || 'Night'}, it's `;
    const time = date.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    const day = date.toLocaleDateString(locale, { weekday: 'long' });
    const ordinalNumbers = (date: any) => {
        switch (date) {
            case date === 1:
                return `${date}st`
            case date === 2:
                return `${date}nd`
            case date === 3:
                return `${date}rd`
            default:
                return `${date}th`
        }
    }
    const dateShown = `${day} the ${ordinalNumbers(date.getDate())} of ${date.toLocaleDateString(locale, { month: 'long' })}`;

    useEffect(() => {
        const intervalId = setInterval(() => {// Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Clear interval on unmount
    }, []);

    return (
        <summary className={`row align-center`}>
            <p>{greetings} {dateShown}, the local time is {time}.</p>
        </summary>
    )

}