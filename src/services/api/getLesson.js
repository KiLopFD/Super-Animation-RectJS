import { get } from "./request"

const api_url = 'api'


export const lesson = async (params, categories = 'cpp') => {

    const data = await get(`${api_url}/lesson/${categories}/${params}`,)
    return data
}