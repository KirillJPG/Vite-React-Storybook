import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Actions = {
    setZoom:(zoom:number)=>void,
    setX:(x:number)=>void,
    setY:(y:number)=>void
}
type State = {
    x:number,
    y:number,
    zoom:number
}
export const useMapStore = create<State & Actions>()(
    immer((set)=>({
        setX:(x:number)=>{set((state)=>{state.x=x})},
        setY:(y:number)=>{set((state)=>{state.y=y})},
        setZoom:(zoom:number)=>{set((state)=>{state.zoom=zoom})},
        x:0,
        y:0,
        zoom:1
    }))
)