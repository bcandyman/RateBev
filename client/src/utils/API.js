import axios from 'axios';

const API = {
	login: (data) => axios.post('api/user/login', data),
	signup: (data) => axios.post('api/user/signup', data),
	states: () => axios.get('/api/state/all'),
};

export default API;
