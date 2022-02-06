import { AxiosInstance } from './AxiosInstance'
export const ApiService = {
	get(url, params) {
		return AxiosInstance.get(url, params)
	}
}
