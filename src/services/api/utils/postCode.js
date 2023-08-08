import { domain } from "../request"

const api_url = 'api'

export const postCode = async (categories, param,data, setData, options) => {
    domain.post(`${api_url}/submit-code/${categories}/${param}/${options}`, { code:data }).then(async (res) => {
        const data = await res.data
        console.log(res.data)
        setData(data)
    }).catch((err) => {
        console.error(err)
    })
}