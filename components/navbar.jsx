/* eslint-disable no-unused-vars */
import React from "react"
import menuIcon from '/public/menuicon.svg';


export default function NavBar() {
    return(
      <>
        <div className='navbar'>
          <p className='logotype'>devjobs</p>
          <img src={menuIcon} alt='menuicon' className="menuiconcolor"/>
        </div>
  
        
      </>
    )
  }