import { useQuery } from "@tanstack/react-query";
import { NewsQuery } from "../api/News/News.query";

export function useNews(){
    return useQuery(NewsQuery.getAll())
}