import { domain } from "../request"

const api_url = 'api'

export const postLogIn = async (infoUser, setData) => {
    domain.post(`${api_url}/login`, {
        ...infoUser
    }).then(async (res) => {
        // console.log(res.data)
        const data = await res.data
        setData(data)
    }).catch((err) => {
        console.error(err)
    })
}