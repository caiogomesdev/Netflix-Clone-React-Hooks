import axios from 'axios'

export const KEY = '643c96670c562850624d73ed2583b517'

const Api = axios.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default Api