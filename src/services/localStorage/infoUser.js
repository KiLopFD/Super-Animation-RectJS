

export const setLocalStorageUser = (infoUser) => {
    localStorage.setItem(`user`, JSON.stringify({...infoUser, password:'?????'}))
}