import {queryOptions} from "@tanstack/react-query"
import { GetAll } from "./get-news"
export const NewsQuery= {
    all:()=>["news"],
    list:()=>[...NewsQuery.all(),"list"],
    getAll:()=>queryOptions({
        queryKey:[...NewsQuery.list()],
        queryFn:GetAll,
        select:(data)=>{return data.data}
    })

}