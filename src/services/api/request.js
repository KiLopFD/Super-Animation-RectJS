const API_DOMAIN = "https://django-test-server-h0a8srdbv-kilopfd.vercel.app/";

export const get = async (path, options = {}) => {
    const response = await fetch(API_DOMAIN + path, options);
    const result = await response.json();
    console.log(API_DOMAIN + path)
    return result;
};

export const post = async (path, options = {}) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });
    const result = await response.json();
    return result;
};

export const del = async (path) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "DELETE",
    });
    const result = await response.json();
    return result;
};

export const patch = async (path, options = {}) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
    });
    const result = await response.json();
    return result;
};