import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface MapState{
    x:number,
    y:number,
    zoom:number,
}
const initialState:MapState ={
    x:0,
    y:0,
    zoom:1
}
export const mapSlice = createSlice({
    name:"map",
    initialState,
    reducers:{
        setX(state,action:PayloadAction<number>){
            state.x = action.payload 
        },
        setY(state,action:PayloadAction<number>){
            state.y = action.payload 
        },
        setZoom(state,action:PayloadAction<number>){
            state.zoom = action.payload 
        },
    }

})
export default mapSlice.reducer