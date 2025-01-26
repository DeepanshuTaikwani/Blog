import axios from "axios"

 const api=axios.create({
    baseURL:"https://happytales-backend.vercel.app/api",
})
export default api;