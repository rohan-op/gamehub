import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "fc4a1db4b8d04fcab83b402ecf6d9239"
    }
});