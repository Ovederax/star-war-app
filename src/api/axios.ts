import axios from 'axios'

export type AxiosResponse<T> = {
  data: T
}

const backendURL = 'https://swapi.dev/api/'


const defaultOptions = {
  baseURL: backendURL,
}

const axiosInstance = axios.create(defaultOptions)

export default axiosInstance