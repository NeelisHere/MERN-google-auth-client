import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL
// const API_BASE_URL = 'http://localhost:8000'

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
    }
})

export const loginAPI = async () => api.get('/auth/login/success')
export const logoutAPI = async () => api.get('/auth/logout')