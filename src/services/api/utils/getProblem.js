import { domain } from "../request"

const api_url = 'api'



export const getProblem = async (params, categories = 'cpp', setData) => {
    domain.get(`${api_url}/submit-code/${categories}/${params}/description`)
        .then(async (res) => {
            // console.log(res.data)
            const data = await res.data
            setData(data);
        })
        .catch((err) => {
            console.log(err);
    })
}