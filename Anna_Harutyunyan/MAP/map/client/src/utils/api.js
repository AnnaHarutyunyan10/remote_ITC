import axios from 'axios';

const API = 'http://127.0.0.1:3000';

export function getAddresses() {
    return axios.get(` ${API}/data`)
        .then(res => res.data)
        .catch(err => []) ; //TODO
}