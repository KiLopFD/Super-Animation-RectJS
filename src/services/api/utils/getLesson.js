import { domain } from "../request"

const api_url = 'api'


// export const lesson = async (params, categories = 'cpp') => {

//     const data = await get(`${api_url}/lesson/${categories}/${params}`,)
//     return data
// }

export const getLessons = async (params, categories = 'cpp', setData, setLoading) => {
    domain.get(`${api_url}/lesson/${categories}/${params}`)
        .then(async (res) => {
            const data = await res.data
            setData(data);
            setLoading(1);
        })
        .catch((err) => {
            console.log(err);
    })
}