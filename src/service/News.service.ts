import axios from "axios";
import { API_URL } from "../config/api";

class NewsService{
    function getNews() {
        return axios.get(API_URL+``)
    }
}