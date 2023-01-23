import React from 'react';
import logo from "../../assets/img/logo.jpg"
import { MyHeader, MyLogo } from './style';

export default function Header() {
 return (
   <MyHeader>
        <MyLogo src={logo}/>
   </MyHeader>
 );
}