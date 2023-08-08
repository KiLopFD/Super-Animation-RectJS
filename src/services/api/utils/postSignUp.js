import { domain } from "../request"

const api_url = 'api'

export const postSignUp = async (infoUser, setData) => {
    domain.post(`${api_url}/sign-up`, {
        ...infoUser
    }).then(async (res) => {
        // console.log(res.data)
        const data = await res.data
        setData(data)
    }).catch((err) => {
        console.error(err)
    })
}