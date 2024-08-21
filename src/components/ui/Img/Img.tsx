import { ImgHTMLAttributes, useState } from "react"
import style from "./Img.module.css"
type Img = {
} & ImgHTMLAttributes<HTMLImageElement>
export function Img(props:Img){
    const [loading,setLoading] = useState(true)
    return <img {...props} src={loading ? "/public/spinner.svg" : props.src} className={loading ? style.loading : props.className} onLoad={()=>setLoading(false)} onDragStart={(e)=>e.preventDefault()}/>
}