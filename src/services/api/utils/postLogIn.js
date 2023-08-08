import { domain } from "../request"

const api_url = 'api'

export const postLogIn = (infoUser, setData) => {
    domain.post(`${api_url}/login`, {
        ...infoUser
    }).then((res) => {
        console.log(res.data)
        setData(res.data)
    }).catch((err) => {
        console.error(err)
    })
}