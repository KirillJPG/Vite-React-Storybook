import { Img } from "../ui/Img/Img"
import style from "./Region.module.css"
type Region = {
    src:string,
    name:string,
    x:number,
    y:number,
}
export function Region({name,src,x,y}:Region){
    return (
        <div className={style.body} style={{left:`${x}px`,top:`${y}px`}}>
            <div className={style.content}>
                <div className={style.title}>{name}</div>
                <Img src={src} className={style.image}/>
            </div>
        </div>
    )
}