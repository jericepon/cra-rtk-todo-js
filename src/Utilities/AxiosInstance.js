import axios from 'axios'

export const AxiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/todos',
	headers: {
		'content-type': 'application/json'
	}
})
