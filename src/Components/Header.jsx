import React, { useState } from 'react'
import { useEffect } from 'react';
import {  Link } from "react-router-dom";


function Header() {

    const [show,setshow]=useState(true);
    const [text,settext]=useState("Login");
    const [page,setpage]=useState("Home");


    
    useEffect(() => {
      if(localStorage.getItem('Accounts').length > 0 && localStorage.getItem('Accounts')!=="undefined"){setshow(false); settext("Connected"); console.log(localStorage.getItem('Accounts'),"local storage accepted value")}

      window.ethereum.on('accountsChanged' ,(accounts) => 
          {
          localStorage.setItem('Accounts', accounts);
          console.log(accounts);
          if(accounts.length===0){
          setshow(true); settext("Login");
          }}
        )}
    ,[]);
    


    async function loginWithMetaMask() {

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      .catch((e) => {
        console.error(e.message);
        return
      })
    localStorage.setItem('Accounts', accounts);
    if (!accounts) { return }
    if (show) {setshow(!show); settext("Connected");}

  }
  
      function changePage(stuff){
      setpage(stuff);
      console.log(page);
      return

      }
  return (
    <div>
    <header className="p-1 text-bg-dark">
<div className="container">
  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">

    </a>

    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li><Link to="./" onClick={() => changePage("Home")} style={(page==="Home") ? {opacity:"0.5"}:{opacity:"1"}} className="nav-link px-2 text-white">Home</Link></li>
{/*       <li><Link to="#" className="nav-link px-2 text-white">Features</Link></li>
      <li><Link to="#" className="nav-link px-2 text-white">Pricing</Link></li>
      <li><Link to="#" className="nav-link px-2 text-white">FAQs</Link></li> */}
      <li><Link to="./AboutUs" onClick={() => changePage("About")} className="nav-link px-2 text-white" style={(page==="About") ? {opacity:"0.5"}:{opacity:"1"}}>About</Link></li>
    </ul>



    <div className="text-end">
      <button id="loginButton" onClick={  () => {loginWithMetaMask()} } style={ !show ? {backgroundColor:"green", borderColor:"green"}: {} } type="button" className="btn btn-primary px-4">{text}</button>
    </div>
  </div>
</div>
</header>

</div>
  )
}

export default Header;