import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mapReduser from "./reducers/Map.slice"
import { newsApi } from "../service/News.service";
import { regionApi } from "../service/Region.service";
const rootReducer = combineReducers({
    mapReduser, 
    [newsApi.reducerPath]:newsApi.reducer,
    [regionApi.reducerPath]:regionApi.reducer,
})

export const setupStore = () =>{
    return configureStore({ 
        reducer:rootReducer,
        middleware:(defaultMiddleware)=>{
            return defaultMiddleware().concat(newsApi.middleware).concat(regionApi.middleware)
        }
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']