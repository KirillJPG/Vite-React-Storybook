import axios from "axios"


const apiInstanse = axios.create({
    baseURL:import.meta.env.VITE_API_URL+`?apikey=${import.meta.env.VITE_API_KEY}&country=ua`,
    headers:{
        'Content-Type':'application/json',
    }
})
export default apiInstanse