import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Detailproduct from './Detailproduct'
const Detailproductpage=(props)=> {
    const[detailproduct,setdetailproduct]=useState(false)
    const[loading,setloading]=useState(true)
    const{pid}=useParams()
    useEffect(() => {
      fetch("/product.json")
        .then((res) => res.json())
        .then((product) => {
          
          const productList = product.products;

          const singleProduct = productList.filter((x) => x.id == pid);
          setdetailproduct(singleProduct);

          setloading(false);
        })
        .catch((err) => {
          setloading(true);
          setdetailproduct(false);
        });
    }, [pid]);
    return (
      <div>
        {loading && <h1>loading...</h1>}
        <div style={{ display: "flex" }}>
          {detailproduct && (
            <Detailproduct
              key={detailproduct[0].id}
              id={detailproduct[0].id}
              image={detailproduct[0].image}
              title={detailproduct[0].title}
              price={detailproduct[0].price}
              category={detailproduct[0].category}
              description={detailproduct[0].description}
            />
          )}
        </div>
      </div>
    );
}

export default Detailproductpage
