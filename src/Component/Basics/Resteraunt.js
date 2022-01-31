import React, { useState } from 'react';
import Card from './Card';
import Menu from "./MenuApi";
import Navbar from './Navbar';
// import "./Resteraunt.css";

const uniqulist=[
  ...new Set( 
  Menu.map((curElement)=>{
    return curElement.category;
  })),"All"]

console.log( "Array is",uniqulist);
const Resteraunt = () => {
    const[menudata,setmenu]=useState(Menu);
    const[menulist,setmenulist]=useState(uniqulist);

    console.log(menudata);

    const filterItem = (category) =>{
      if(category==="All"){
        setmenu(Menu);        
        return;
      }
      const updatelist=Menu.filter((curElement)=>{
        return curElement.category=== category;
      });
      setmenu(updatelist);

    }
  
    return (
      <div>
        <Navbar filterItem={filterItem} menulist={menulist}/>
      <Card menudata={menudata} />
    </div>

    );
};

export default Resteraunt;
  
