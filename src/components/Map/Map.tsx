import { MouseEvent, ReactNode, useRef, useState } from "react";
import style from "./Map.module.css"
import { Menu } from "./Menu";
import { useTypeSelector } from "../../hooks/useTypeDispatch";
import { useActions } from "../../hooks/useAction";

export function Map({children}:{children:ReactNode | ReactNode[]}){
    const {x,y,zoom} = useTypeSelector(state=>state.mapReduser)
    const {setX,setY} = useActions()
    const ref = useRef<HTMLDivElement>(null)
    const [select,setSelect] = useState(false)
    const onMove = (e:MouseEvent<HTMLDivElement>)=>{
        if (select){
            setX(x+e.movementX)
            setY(y+e.movementY)
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