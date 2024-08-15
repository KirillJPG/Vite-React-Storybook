import { MouseEvent, ReactNode, useRef, useState } from "react";
import style from "./Map.module.css"
export function Map({children}:{children:ReactNode | ReactNode[]}){
    const [left,setLeft] = useState(0)
    const [top,setTop] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const [select,setSelect] = useState(false)
    const onMove = (e:MouseEvent<HTMLDivElement>)=>{
        if (select){
            setLeft(l=>l+e.movementX)
            setTop(t=>t+e.movementY)
        }
    }
    return (
        <div className={style.map} ref={ref} onMouseUpCapture={()=>setSelect(false)} onMouseDownCapture={()=>setSelect(true)} onMouseMove={onMove} onMouseLeave={()=>setSelect(false)}>
            <div style={{marginLeft:`${left}px`,marginTop:`${top}px`}} >
                {children}  
            </div>
        </div>
    )
}