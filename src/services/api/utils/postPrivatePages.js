import { domain } from "../request"

const api_url = 'api'

export const postPrivatePages = async (token, dispatch, checkAuthen) => {
    domain.post(`${api_url}/test`,{
        token: token
    }, {
        headers: {
            Authorization: `Token ${token}`
        }
    }).then(async (res) => {
        const data = await res.data
        console.log(data)
        dispatch(checkAuthen(data))
    }).catch((err) => {
        console.error(err)
    })
}