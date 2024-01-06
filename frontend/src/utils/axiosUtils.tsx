import axios from "axios";
const token = localStorage.getItem('token');
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'token': `BR__${localStorage.getItem('token')}`,
    },
});
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
          
            originalRequest.headers['token'] = `BR__${localStorage.getItem('token')}`;
            return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
    }
);
export default axiosInstance;