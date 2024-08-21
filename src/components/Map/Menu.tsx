import { useActions } from "../../hooks/useAction"
import { useTypeSelector } from "../../hooks/useTypeDispatch"

import style from "./Menu.module.css"

export function Menu(){
    const {zoom} = useTypeSelector(state=>state.mapReduser)
    const {setZoom} = useActions()

    const onClick = (addZoom:number) =>{
        if(zoom+addZoom>0 && zoom+addZoom < 2.25){
            setZoom(zoom+addZoom)
        }
    }
    return (
        <div className={style.menu}>
             <div className={style.boxzoom}>
                <div className={style.editZoom} onClick={()=>onClick(-0.25)}>-</div>
                <div className="">
                    <img src="/public/zoom.svg" width={50} height={50}/>
                    <div className={style.zoom}>{zoom}</div>
                </div>
                <div className={style.editZoom} onClick={()=>onClick(0.25)}>+</div>
             </div>
        </div>
    )
}