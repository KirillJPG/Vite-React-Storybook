
import { fetchBaseQuery,createApi } from "@reduxjs/toolkit/query/react";
import { Root } from "../types/News.interface";

export const newsApi = createApi({
    reducerPath:"newsApi",
    tagTypes:["news"],
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_API_URL+`?apikey=${import.meta.env.VITE_API_KEY}&country=ua`,
        headers:{'Content-Type':'application/json',}
    }),
    endpoints:(build)=>({
        AllNews:build.query<Root,null>({
            query:()=>""
        })
    })
})
export const {useAllNewsQuery} = newsApi