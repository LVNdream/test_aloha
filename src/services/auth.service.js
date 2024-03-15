import axios from "axios";
import createApiClient from "./api.service";

class AuthService {
    // constructor(baseUrl = "/api") {
    //     this.api = createApiClient(baseUrl);
    // }

    async getMajoring() {
        return await axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/majoring/get',
        })
    }

     async register(data) {
        return await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/signup',
            data
       
        })
    }
     async login(data) {
        return await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/user/login',
            data
        })
    }

    
}

export default new AuthService();