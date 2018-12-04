
import apisauce from 'apisauce'

const mapParams = (params) => {
    return _.keys(_.mapKeys(params, (value, key) => `${key}=${value}`)).join('&');
}

const customResponse = (response) => {
    if (!response.ok) throw response.problem
    else return response.data
}

const create = (baseURL = 'https://') => {
    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL,
        // here are some default headers
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json'
        },
        // 10 second timeout...
        timeout: 10000
    })

    const login = ({ phone, password }) => api.post('login', { phone, password })

    return {
        login
    }
}


export default {
    create
}