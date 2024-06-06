import axios from 'axios';

const PRODUCTS_URL = "http://localhost:8080/api/v1/products";
const SUPERMARKETS_URL = "http://localhost:8080/api/v1/supermarkets";
const USERS_URL = "http://localhost:8080/api/v1/products";

class CheapCheeseService {

    getSupermarkets() {
        return axios.get(SUPERMARKETS_URL);
    }

    getProducts() {
        return axios.get(PRODUCTS_URL);
    }

    getAllUsers() {
        return axios.get(USERS_URL);
    }
}

export default new CheapCheeseService();