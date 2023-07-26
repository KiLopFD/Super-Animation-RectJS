// Token store in cookie


export const setCookieToken = (token, expires, setCookie) => {
    // Đặt cookie
    setCookie('token', token, {
        path: '/', // Path to check cookie
        expires: expires, // Set time end for cookie from server.
    });
}