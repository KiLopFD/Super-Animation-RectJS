import { domain } from "../request"

const api_url = 'api'

export const postCode = (categories, param,data, setData) => {
    domain.post(`${api_url}/submit-code/${categories}/${param}`, { code:data }).then((res) => {
        // console.log(res.data)
        setData(res.data)
    }).catch((err) => {
        console.error(err)
    })
}