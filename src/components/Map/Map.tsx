import { MouseEvent, ReactNode, useRef, useState } from "react";
import style from "./Map.module.css"
import { useMapStore } from "./store";
import { Menu } from "./Menu";

export function Map({children}:{children:ReactNode | ReactNode[]}){
    const {setX,setY,x,y,zoom} = useMapStore()
    const ref = useRef<HTMLDivElement>(null)
    const [select,setSelect] = useState(false)
    const onMove = (e:MouseEvent<HTMLDivElement>)=>{
        if (select){
            setX(x + e.movementX)
            setY(y + e.movementY)
        }
    }
    return (
        <div className={style.map} style={{cursor:select ? "move" : "auto"}} ref={ref}  onMouseUp={()=>setSelect(false)} 
                                                onMouseDown={()=>setSelect(true)} 
                                                onMouseMove={onMove} 
                                                onMouseLeave={()=>setSelect(false)}>
            <div style={{marginLeft:`${x}px`,marginTop:`${y}px`,scale:`${zoom}`}} >
                {children}  
            </div>
            <Menu />
        </div>
    )
}