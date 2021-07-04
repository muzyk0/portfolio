import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://smtp-node.herokuapp.com/',
})

export const api = {
    sendMessage: (formData: FormData) => {
        return instance.post('sendMessage', formData)
    }
}

// Types
export interface FormData {
    name: string
    email: string
    message: string
}