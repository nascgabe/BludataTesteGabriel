import axios from 'axios';

const Api = axios.create({ baseURL: 'https://localhost:44375/v1/company' });

export default Api;
