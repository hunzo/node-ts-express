import axios from 'axios'

export const Test = () => {
    console.log('TEST')
}

const Api = () => {
    return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
        headers: {
            'content-type': 'application/json',
        },
    })
}

export const CallApi = () => {
    return Api().get('/users')
}

interface Payload {
    payload: string
}

export const Call = (payload: string) => {
    return Api().get(`/${payload}`)

}
