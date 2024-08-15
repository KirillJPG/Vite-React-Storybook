import { Region } from "../Region/Region"
import style from "./Country.module.css"
export function Country(){
    return(
        <div className={style.body}>
            <Region x={500} y={200} name="Luhansk" src="/public/region/Luhansk.svg"/>
            <Region x={434} y={280} name="Donetsk" src="/public/region/Donetsk.svg"/>
            {/* <Region x={500} y={200} name="Kharkiv" src="/public/region/Kharkiv.svg"/> */}
            {/* <Region x={500} y={200} name="Zaporizhzhia" src="/public/region/Zaporizhzhia.svg"/> */}
        </div>
    )
}