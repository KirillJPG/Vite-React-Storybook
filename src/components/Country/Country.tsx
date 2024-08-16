import { Region } from "../Region/Region"
import style from "./Country.module.css"
export function Country(){
    return(
        <div className={style.body}>
            <Region x={469} y={152} name="Volyn" src="/public/region/Volyn.svg"/>
            <Region x={400} y={301} name="Lviv" src="/public/region/Lviv.svg"/>
            <Region x={575} y={154} name="Rivne" src="/public/region/Rivne.svg"/>
            <Region x={364} y={475} name="Zakarpattia" src="/public/region/Zakarpattia.svg"/>
            <Region x={464} y={424} name="Ivano-Frankivsk" src="/public/region/Ivano-Frankivsk.svg"/>
            <Region x={548} y={345} name="Ternopil" src="/public/region/Ternopil.svg"/>
            <Region x={562} y={521} name="Chernivtsi" src="/public/region/Chernivtsi.svg"/>
            <Region x={650} y={309} name="Khmelnytskyi" src="/public/region/Khmelnytskyi.svg"/>
            <Region x={726} y={185} name="Zhytomyr" src="/public/region/Zhytomyr.svg"/>
            <Region x={739} y={387} name="Vinnytsia" src="/public/region/Vinnytsia.svg"/>
            <Region x={875} y={202} name="Kyiv" src="/public/region/Kyiv.svg"/>
            <Region x={944} y={309} name="" src="/public/region/Kyiv City.svg"/>
            <Region x={962} y={104} name="Chernihiv" src="/public/region/Chernihiv.svg"/>
            <Region x={1138} y={104} name="Sumy" src="/public/region/Sumy.svg"/>
            <Region x={1077} y={313} name="Poltava" src="/public/region/Poltava.svg"/>
            <Region x={899} y={350} name="Cherkasy" src="/public/region/Cherkasy.svg"/>
            <Region x={910} y={458} name="Kirovohrad" src="/public/region/Kirovohrad.svg"/>
            <Region x={799} y={568} name="Odesa" src="/public/region/Odesa.svg"/>
            <Region x={942} y={568} name="Mykolaiv" src="/public/region/Mykolaiv.svg"/>
            <Region x={1036} y={636} name="Kherson" src="/public/region/Kherson.svg"/>
            <Region x={1140} y={464} name="Dnipropetrovsk" src="/public/region/Dnipropetrovsk.svg"/>
            <Region x={1275} y={324} name="Kharkiv" src="/public/region/Kharkiv.svg"/>
            <Region x={1396} y={459} name="Donetsk" src="/public/region/Donetsk.svg"/>
            <Region x={1489} y={365} name="Luhansk" src="/public/region/Luhansk.svg"/>
            <Region x={1224} y={578} name="Zaporizhzhia" src="/public/region/Zaporizhzhia.svg"/>
            <Region x={1105} y={780} name="Simferopol" src="/public/region/Simferopol.svg"/>
            <Region x={1169} y={924} name="Sevastopol" src="/public/region/Sevastopol.svg"/>
        </div>
    )
}