import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
  },
})

export default api
