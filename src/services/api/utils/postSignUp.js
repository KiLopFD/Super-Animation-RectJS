import { domain } from "../request"

const api_url = 'api'

export const postSignUp = (infoUser, setData) => {
    domain.post(`${api_url}/sign-up`, {
        ...infoUser
    }).then((res) => {
        console.log(res.data)
        setData(res.data)
    }).catch((err) => {
        console.error(err)
    })
}