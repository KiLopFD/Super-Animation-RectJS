import { domain_post_code } from "../request"

const api_url = 'api'

export const postCodeExpress = async (code, setData) => {
    domain_post_code.post(`/cpp-evaluate`, { code:code }).then(async (res) => {
        const data = await res.data
        console.log(res.data)
        setData(data)
    }).catch((err) => {
        console.error(err)
    })
}