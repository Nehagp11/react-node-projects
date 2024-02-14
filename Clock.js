import { useEffect, useState } from "react";
import './Clock.css';

export default function Clock(props){
    const now = new Date();
    const [minutes, setMinutes] = useState(now.getMinutes());
    const [seconds, setSeconds] = useState(now.getSeconds());
    // const [timerId, setTimerId] = useState(1);
    let timerId = 1;
    // setTimerId(1);

    const setTime = () => {
        if(seconds + 1 == 60){
            setSeconds(0);
            //setMinutes(minutes + 1);
            setMinutes(minutes + 1 == 60 ? 0 : minutes + 1);
        } else {
            setSeconds(seconds + 1);
        }
    }
    
    useEffect(()=> {
        if(timerId){
            timerId = (setTimeout(setTime, 1000)); 
        } 
    }, [seconds]);

    const startTimer = ()=>{
        setSeconds(0); 
        setMinutes(0); 
        timerId = 1;
        // setTimerId(1);
    }

    const stopTimer = ()=>{
        clearTimeout(timerId);
        timerId = undefined;
        // timerId = undefined;
        // setTimerId(null);
    }

    const updateTime = (e) => {
        clearTimeout(timerId);
        let timeArr = e.target.value && e.target.value.split(':');
        if(timeArr.length == 2){
            let inputMinutes = parseInt(timeArr[0]);
            let inputSeconds = parseInt(timeArr[1]);
            if(inputMinutes < 60 && inputSeconds < 60){
                setMinutes(inputMinutes);
                setSeconds(inputSeconds);
            }
        } 
    }

    const updateDegreegsByDragging = (e) => {
        console.log(" drag event", e);
        let radius = 430/ 2;
       const radians = Math.atan2(e.pageX - radius, e.pageY - radius);
       let rotateDegrees = (radians * (180 / Math.PI)) * -1;
       console.log("rotateDegrees ", rotateDegrees);
       if(e.target.classList.contains('min-hand')){
        let newMinutes =  Math.floor(rotateDegrees/6);
        if(newMinutes < 0){
            setMinutes(Math.abs(newMinutes) + 30);
        }
       } else if(e.target.classList.contains('second-hand')){
        let newSeconds =  Math.floor(rotateDegrees/6);
        if(newSeconds < 0){
            setSeconds(Math.abs(newSeconds) + 30);
        }
       } 
    }

    let timeInString = (minutes > 9 ? minutes : '0' + minutes) + ' : ' + (seconds > 9 ? seconds : '0' + seconds);
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    let minsDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;

    return (
        <>
        <div className="clock">
            <div className="inner-clock-face">
                <img src="https://media.licdn.com/dms/image/D4D35AQE2nmOwKIHmTw/profile-framedphoto-shrink_400_400/0/1639933334463?e=1705474800&v=beta&t=0ux7Gm72AjNLSky_rE3N9R-1J5bUGVMGMCO3wGFVliY" width="100%" />
            <div className="hand min-hand draggable" draggable onDrag={updateDegreegsByDragging} style={{transform : `rotate(${minsDegrees}deg)`}}></div>
            <div className="hand second-hand draggable" draggable onDrag={updateDegreegsByDragging} style={{transform : `rotate(${secondsDegrees}deg)`}}></div>
            </div>
        </div>
         
        <div className="box">
            <input type="text" className="input-box" value={timeInString} onChange={(e) => updateTime(e)}></input>
        </div>

        <button className="btn yellow" onClick={startTimer}> Start </button>
        <button className="btn red" onClick={stopTimer}> Stop </button>
        </>
    )
}