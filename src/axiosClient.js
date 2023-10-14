import axios from 'axios'
//引入axios庫

const axiosClient = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/'
  //API連結
})

export default axiosClient
