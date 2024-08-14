import apiInstanse from "../../config/AxiosInstanse";
import type { Root } from "../../types/News.interface";

export function GetAll(){
    return apiInstanse.get<Root>("")
}