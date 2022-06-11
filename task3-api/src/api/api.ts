
import axios from 'axios'
const api =  axios.create({
    baseURL:  'https://jsonplaceholder.typicode.com/posts/'
})

export const getCommentsRes = (postsNum:number) => {
    return api.get(postsNum + '/' + 'comments').then(res => res)
}