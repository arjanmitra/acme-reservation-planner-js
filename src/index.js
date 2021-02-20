import axios from 'axios'

const init = async() => {
    try {
        const users = (await axios.get('/api/users')).data
        const restaurants = (await axios.get('/api/restaurants')).data
        console.log(users, restaurants)
    }
    catch(ex){
        console.log(ex)
    }
}
init()