import axios from "axios"
import { API_URL } from "./api"

const apiInstanse = axios.create({
    baseURL:API_URL,
    headers:{
        'Content-Type':'application/json',
        'apikey':
    }
})
export default apiInstanse