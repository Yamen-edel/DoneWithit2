//to make API calls we use a library called 'apisauce'. 'fetch' library is ok too.
//apisauce supports stadardized errors 
import { create } from 'apisauce';
const apiClient = create({
    baseURL: 'http://184.70.221.229:9000/api'
})


export default apiClient;