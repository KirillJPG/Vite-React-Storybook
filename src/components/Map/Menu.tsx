import style from "./Menu.module.css"
import { useMapStore } from "./store"

export function Menu(){
    const {zoom,setZoom} = useMapStore()
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