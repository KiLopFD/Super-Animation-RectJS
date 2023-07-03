import axios from "axios";


// http://127.0.0.1:8000/
// https://django-test-server-h0a8srdbv-kilopfd.vercel.app/
const API_DOMAIN = "http://127.0.0.1:8000/";


export const domain = axios.create({
    baseURL: `${API_DOMAIN}`
})

