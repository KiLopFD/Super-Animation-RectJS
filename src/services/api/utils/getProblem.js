import { domain } from "../request"

const api_url = 'api'



export const getProblem = (params, categories = 'cpp', setData) => {
    domain.get(`${api_url}/submit-code/${categories}/${params}/description`)
        .then((res) => {
            // console.log(res.data)
            setData(res.data);
        })
        .catch((err) => {
            console.log(err);
    })
}