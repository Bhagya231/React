import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeout,mode})
{
    const [remaningTime,setRemaningTime] = useState(timeout);
    // setTimeout(() => {
    //     onTimeout();

    // },timeout);

    useEffect(() => {
        console.log("Timer started")
        const timer = setTimeout(onTimeout,timeout);

        return () => {
            // console.log("timer stoped")
            clearTimeout(timer);
        }

    },[timeout,onTimeout])
    

    useEffect(()=> {
        const interval = setInterval(() => {
            console.log("Interval started")
        setRemaningTime(prevRemainingTime => prevRemainingTime - 100);
        },100);

        return () => {
            console.log("Interval stoped")
            clearInterval(interval);
        }

    },[])
   

    return(
        <progress id="question-time" max={timeout} value={remaningTime} className={mode}/>
    )
}