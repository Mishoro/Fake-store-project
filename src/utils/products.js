const API_URL='https://fakestoreapi.com/products/'
export const getallproducts=async ()=>{
 const response=await fetch(API_URL);
const products=await response.json();
return products
}
export const detailproducts=async (id)=>{
    const url=`${API_URL}${id}`
    const response=await fetch(url);
   const detailproduct=await response.json();
   return detailproduct
   }
   export const productsByCategory=async (category)=>{
    const url=`${API_URL}/category/${category}`
    const response=await fetch(url);
   const productbycategory=await response.json();
   return productbycategory
   }

