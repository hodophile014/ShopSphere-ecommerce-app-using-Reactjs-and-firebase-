import axios from 'axios'

import { useQuery } from 'react-query'

const fetchProduct = productId =>{
    return axios.get(`http://localhost:4000/product/${productId}`)
}
export const useProductData = (productId) =>{
return useQuery(['product-data',productId],()=>fetchProduct(productId))
}

      