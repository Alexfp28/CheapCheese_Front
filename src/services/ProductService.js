import axios from 'axios';

class ProductService {

    getProducts() {
        return axios.get('http://localhost:8080/api/v1/products');
    }
}

export default new ProductService();