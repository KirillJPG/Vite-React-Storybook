
import { fetchBaseQuery,createApi } from "@reduxjs/toolkit/query/react";
import { Region } from "../types/Region.interface";

export const regionApi = createApi({
    reducerPath:"regionApi",
    tagTypes:["region"],
    baseQuery:fetchBaseQuery({
        baseUrl:'localhost:3000/region/',
        headers:{'Content-Type':'application/json',}
    }),
    endpoints:(build)=>({
        AllRegion:build.query({
            query:()=>"/",
        }),
        RegionById:build.query<Region,number>({
            query:(id)=>`/${id}`,
        })
    })
})
export const {useAllRegionQuery,useRegionByIdQuery} = regionApi