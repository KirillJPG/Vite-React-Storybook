import { useMemo } from "react";
import { mapSlice } from "../store/reducers/Map.slice";
import { useTypeDispatch } from "./useTypeDispatch";
import { bindActionCreators } from "@reduxjs/toolkit";

export const rootActions ={
    ...mapSlice.actions    
}
export function useActions(){
    const dispatch = useTypeDispatch()
    return useMemo(()=>bindActionCreators(rootActions,dispatch),[dispatch])
}