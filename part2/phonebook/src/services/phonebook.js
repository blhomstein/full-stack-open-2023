import axios from 'axios'
const baseURL = '/api/persons'


const getAll = () => {
    const request =  axios.get(baseURL)
    
    return request.then(res => {
        console.log(res.data);
        return res.data
    })
}
const getOne = async (id) => {
    const request = await axios.get(`${baseURL}/${id}`)
    console.log("this is from getone", typeof id);
    return request.then(res => res.data)
}

const create = (newObj) => {

    const request=  axios.post(baseURL, newObj)
    return request.then(res => res.data)
}
const change = (id,newchange) => {
    const request = axios.put(`${baseURL}/${id}`, newchange)
    return request.then(res =>{ 
        console.log("the req is all good here",res.data)
        return res.data
    }).catch(e=>{
        console.log("im from phonejs",e.message);
        console.log("the full error", e );
    })
}

const erase = (id) =>{
    const request = axios.delete(`${baseURL}/${id}`)
    return request
    .then(res => console.log(res))
}

export default {
    getAll, 
    getOne,
    create,
    erase,
    change
}