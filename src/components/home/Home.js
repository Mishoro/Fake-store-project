import React from 'react'

import styled from'styled-components'
import { Link } from 'react-router-dom'

const Div=styled.div`
margin:0 200px 0 0;
`

const Shop=styled.div`
padding:50px 20px 250px 200px;
display: flex;
text-decoration:none;
color:black;

`

const STOREALLPRODUCT=styled.div`
font-size:50px;
font-weight:800;
padding: 200px 0 0 0;
text-align:center;

`
function Home() {
    return (
        
          <Shop >
              
              <Div>
              <Link to="/products" style={{textDecoration:"underline",color:"GEREEN"}}>
            <STOREALLPRODUCT>STORE ALL PRODUCT</STOREALLPRODUCT>
            
             </Link>
             <p>  Fake store rest API for your e-commerce or <br/> shopping website prototype</p>
             </Div>
         
          </Shop>
        
    )
}

export default Home
