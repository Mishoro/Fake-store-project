import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import styled from'styled-components'
const Categ=styled.div`
margin:30px 0 10px 40px;
position:sticky;
top: 130px;
display:inline-block;
justify-content:space-between;
align-items:center;
`

function Category({category}) {
 
    return (
      <Categ>
        <DropdownButton
          variant="info"
          id="dropdown-basic-button"
          title="Category"
        >
          <Dropdown.Item
            onClick={() => category("electronics")}
            href="#/action-1"
          >
            electronics
          </Dropdown.Item>
          <Dropdown.Item onClick={() => category("jewelery")} href="#/action-2">
            jewelery
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => category("men's clothing")}
            href="#/action-3"
          >
            men's clothing
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => category("women's clothing")}
            href="#/action-3"
          >
            women's clothing
          </Dropdown.Item>
        </DropdownButton>
        
      </Categ>
    );
}

export default Category
