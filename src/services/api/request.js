import axios from "axios";


// http://127.0.0.1:8000/
// https://django-test-server-h0a8srdbv-kilopfd.vercel.app/
// https://django-test-kilopdev.vercel.app/
// https://django-test-server-git-main-kilopfd.vercel.app/
export const API_DOMAIN = "https://django-test-server-git-main-kilopfd.vercel.app/";
export const API_DOMAIN_CODE = "http://localhost:80/";
export const SUP_DOMAIN_API = 'api'

export const domain = axios.create({
    baseURL: `${API_DOMAIN}`,
    headers:{
        "Content-Type":"application/json"
    }
})
export const domain_post_code = axios.create({
    baseURL: `${API_DOMAIN_CODE}`
})


