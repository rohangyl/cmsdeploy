// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/api', // Adjust the base URL accordingly
  });
  
  // Add an interceptor to set the Authorization header
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('jwtToken'); // Retrieve the token from storage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;
  