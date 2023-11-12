import axios from 'axios'
//引入axios庫
import { onMounted } from 'vue'


const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL 
  //API連結
})


export default axiosClient
