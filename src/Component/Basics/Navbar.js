import React from 'react';
import Menu from "./MenuApi";
import "./Navbar.css";
const Navbar = ({filterItem,menulist}) => {
  return <div>
      
      <nav className='nav_bar'>
      {
          menulist.map((curr)=>{
                return(
                    <div className='div_item' onClick={()=>filterItem(curr)}>{curr}</div>
                )
          })
      }

      </nav>
   
  </div>;
};

export default Navbar;

