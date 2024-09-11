import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'8a08a77052b84bcd8820b86b8e0a4d49'
    }
})