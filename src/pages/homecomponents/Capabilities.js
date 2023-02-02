import React from "react";
import { Link } from "react-router-dom";

export default function Capabilities () {
    const startMilli = 1674798266637;
    const [projectDuration, setProjectDuration] = React.useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        string: ''
    });

    React.useEffect(() => {
        const startTime = new Date(0).setUTCMilliseconds(startMilli);
        const timer = setInterval(() => { 
        const diffMs = new Date() - startTime;
        
        let seconds = Math.floor(diffMs / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours   = Math.floor(minutes / 60);
        let days    = Math.floor(hours / 24);
        let months  = Math.floor(days / 30);
        let years   = Math.floor(days / 365);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;
        days %= 30;
        months %= 12;

        let durationObject = {
            years: years,
            months: months,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }

        let displayStr;
        if(years > 0) {
            displayStr = `${years} years, ${months} months and ${days} days`
        } else if (months > 0) {
            displayStr = `${months} months, ${days} days and ${hours} hours`
        } else if (days > 0) {
            displayStr = `${days} days, ${hours} hours and ${minutes} minutes`
        } else if (hours > 0) {
            displayStr = `${hours} hours, ${minutes} minutes and ${seconds} seconds`
        } else {
            displayStr = `${minutes} minutes and ${seconds} seconds`
        }

        durationObject.string = displayStr;
        setProjectDuration(durationObject);
      }, 1000);
      return () => {
        clearInterval(timer); 
      }
    }, []);

    return (
        <div className="capabilities">
            <h3>Its been {projectDuration.string} since Abhinav started working on me. Here's all he's enabled me to do -</h3>
            <ul>
                <li className="capability">I can log his workouts.</li>
                <ul>
                    <li><Link to="/exercises">Add exercises</Link></li>
                    <li><Link to="/workouts">Add workouts</Link></li>
                    <li><Link to="/dashboard">View dashboard</Link></li>
                </ul>
                <li className="capability">I help him plan his life in general.</li>
                <ul>
                    <li><Link to="/planner">Planner</Link></li>
                </ul>
            </ul>
        </div>
    );
}