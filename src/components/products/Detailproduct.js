import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CartState } from '../../context/Cartprovider'

const ProductImage=styled.img`
width: 400px;
`
const ProductInfo=styled.div`
padding:100px;
flex-grow: 1;
`
const Producttitle=styled.p`
color:rgb(68, 68, 143);
font-size: 30px;
font-weight:600;
/* flex-grow:1; */
`
const Producholder=styled.div`
display: flex;
margin:40px;
vertical-align:center;

`
const Producprice=styled.p`
font-size:30px;
`
const Productdisc=styled.p`
margin-top:15px;
`
const Cart=styled.div`
font-size:25px;
background-color: green;
width: 250px;
padding:10px;
font-weight:500;
text-align:center;
border-radius:5px;
`
const Detailholder=styled.div`
padding:60px;
display: flex;
`
const Detail=styled.div`
width: 70vw;
margin-left:70px;
`

const Detailproduct = ({
  id,
  image,
  title,
  price,
  description,
  category,
  style,
}) => {
  const detailpage = `/products/${id}`;
  const [{ cart }, dispatch] = CartState();
  const [products, setProducts] = useState([]);
  const newproduct = products.filter((product) => product.id !== id);
  if (cart) {
    function checkproduct(product) {
      return product.id === id;
    }
    var exist = cart.find(checkproduct);
  }
  const AddtoCart = () => {
    exist ??
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          quantity: 1,
        },
      });
    // }
  };
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((product) => {
        const productList = product.products;

        const singleProduct = productList.filter((x) => x.category == category);
        setProducts(singleProduct);
      });
  }, []);

  return (
    <Detailholder>
      <Detail>
        <div style={{ display: "flex" }}>
          <Producttitle>{title}</Producttitle>
        </div>
        <Producholder>
          <div>
            <ProductImage src={image} alt={`image of ${title}`}></ProductImage>
          </div>
          <ProductInfo>
            <Producprice>${price}</Producprice>

            <Cart onClick onClick={AddtoCart}>
              Add to Cart
            </Cart>
          </ProductInfo>
        </Producholder>
        <h4>Over View</h4>
        <Productdisc>{description}</Productdisc>
        <h4>Category</h4>
        <Productdisc>{category}</Productdisc>
      </Detail>
     
    </Detailholder>
  );
};

export default Detailproduct
