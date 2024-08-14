import { useEffect, useMemo, useState } from "react"
import styles from "./timer.module.css"
export function Timer(){
    let [date,setDate] = useState(new Date())
    let [progress,setProgress] = useState(0)
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
                <circle cx="50" cy="50" r="45" fill="none" style={{stroke:""}} className={styles.bgcircle}/>
                <circle cx="50" cy="50" r="45" fill="none" style={{stroke:""}} strokeDasharray={283} strokeDashoffset={progress} className={styles.circle}/>
            </svg>
            <div className={styles.timer}>
                {date.toLocaleTimeString()}
            </div>
        </div>
    )
}