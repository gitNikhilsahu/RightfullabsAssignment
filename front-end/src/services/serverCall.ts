import axios from 'axios';


export const baseURL = "http://localhost:8000"

const serverCallAxiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default serverCallAxiosInstance;