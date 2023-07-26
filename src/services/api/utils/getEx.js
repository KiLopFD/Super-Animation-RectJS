import { domain } from "../request"

const api_url = 'api'


// export const lesson = async (params, categories = 'cpp') => {

//     const data = await get(`${api_url}/lesson/${categories}/${params}`,)
//     return data
// }

export const getEx = (params, categories = 'cpp', setData) => {
    domain.get(`${api_url}/exercise/${categories}/${params}`)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}