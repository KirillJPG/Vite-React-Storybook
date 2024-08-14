import { useEffect, useMemo, useState } from "react"
import styles from "./timer.module.css"

export type TimerTypes = {
    color?:string,
    strokeColor?:string,
    strokeWidth?:string,
    strokeBg?:string
    
}
export function Timer({color,strokeColor,strokeWidth,strokeBg}:TimerTypes){
    let [date,setDate] = useState(new Date())
    let [progress,setProgress] = useState(0)
    console.log(color,strokeColor,strokeWidth)
    useEffect(()=>{
        let timer = setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])
    useMemo(()=>{
        setProgress(283*(date.getSeconds()/60))
    },[date])
    return (
        <div className={styles.body}>
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="45" fill="none" stroke={strokeBg ?? "gainsboro"} strokeWidth={strokeWidth ?? "5px"} />
                <circle cx="50" cy="50" r="45" fill="none" stroke={strokeColor ?? "black"} strokeWidth={strokeWidth ?? "5px"}   strokeDasharray={283} strokeDashoffset={progress} className={styles.circle}/>
            </svg>
            <div className={styles.timer} style={{color:color ?? "black"}}>
                {date.toLocaleTimeString()}
            </div>
        </div>
    )
}