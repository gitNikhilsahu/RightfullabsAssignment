import axios from 'axios';


export const baseURL = "https://cors-anywhere.herokuapp.com/https://intern.rightfullabs.com"

const rightfullabsAxiosInstance = axios.create({
	baseURL: baseURL,
	// timeout: 5000,
	// headers: {
	// 	'Access-Control-Allow-Origin': '*',
	// },
});

export default rightfullabsAxiosInstance;