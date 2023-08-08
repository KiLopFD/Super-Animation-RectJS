import { domain } from "../request"

const api_url = 'api'


// export const lesson = async (params, categories = 'cpp') => {

//     const data = await get(`${api_url}/lesson/${categories}/${params}`,)
//     return data
// }

export const getEx = async (params, categories = 'cpp', setData) => {
    domain.get(`${api_url}/exercise/${categories}/${params}`)
        .then(async (res) => {
            const data = await res.data
            setData(data);
        })
        .catch((err) => {
            console.log(err);
        })
}