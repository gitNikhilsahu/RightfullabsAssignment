import axios from 'axios';


export const baseURL = "https://intern.rightfullabs.com"

const axiosInstance = axios.create({
	baseURL: baseURL,
	// timeout: 5000,
	// headers: {
	// 	'Access-Control-Allow-Origin': '*',
	// },
});

export default axiosInstance;