import axios from "axios"


const apiInstanse = axios.create({
    baseURL:process.env.API_URL,
    headers:{
        'Content-Type':'application/json',
        'apikey':process.env.API_KEY
    }
})
export default apiInstanse