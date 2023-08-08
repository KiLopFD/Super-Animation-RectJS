import { domain } from "../request"

const api_url = 'api'

export const postPrivatePages = (token, dispatch, checkAuthen) => {
    domain.post(`${api_url}/test`,{
        token: token
    }, {
        headers: {
            Authorization: `Token ${token}`
        }
    }).then((res) => {
        console.log(res.data)
        dispatch(checkAuthen(res.data))
    }).catch((err) => {
        console.error(err)
    })
}