import axios from "axios"


const apiInstanse = axios.create({
    baseURL:import.meta.env.API_URL+`?${import.meta.env.API_KEY}&`,
    headers:{
        'Content-Type':'application/json',
    }
})
export default apiInstanse