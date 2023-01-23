import React, { useState } from 'react';
import Form from '../../components/Form';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

export default function Home() {
   const [productList,setProductList]=useState([])
 return (
   <div>    
    <Header 
    />
    <Form
       productList={productList}
       setProductList={setProductList}
    />
    <ProductList
      productList={productList}
      setProductList={setProductList}
    />
   </div>
 );
}