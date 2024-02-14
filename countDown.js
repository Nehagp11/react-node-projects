
import React, { useEffect, useState } from "react";

function CountDown(props){
    const calculateTimeLeft = () => {
        let timeLeft = {};
        let today = new Date();
        let newYearDate = new Date(`01/01/${today.getFullYear()+1}`);
        let difference = (newYearDate - today);
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        if (days > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        timeLeft = {};
      }
      return timeLeft;
      }
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });  

      return ( <div className="App">
      {timeLeft.days > 0 ? <div>
      <p>time Remainging for New Year</p>
      {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes: {timeLeft.seconds} Seconds
      </div> : <p> New Year is Here </p>}
    </div>);
}

export default CountDown;
