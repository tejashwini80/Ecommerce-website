import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

const getAllProducts = () => axios.get(API_URL);
const addProduct = (product) => axios.post(API_URL, product);

export default { getAllProducts, addProduct };
