import React from 'react';
import '../Css/Navbar.css';
import companyLogo from '../Images/2-Doo-Logo.png'

const Navbar = () => {
  return (
    <div style={{position:"fixed",width:"100%"}}>
        <nav class="navbar navbar-expand-lg " style={{background:"blue"}}>

<div class="container-fluid">
<a class="navbar-brand" href="#"> <img className='logo' src={companyLogo} alt="2-Doo" /> </a>
<button class="navbar-toggler" type="button"  aria-expanded="false" aria-label="Toggle navigation">
 <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
 <ul class="navbar-nav">
   <li class="nav-item">
     <a class="nav-link active" aria-current="page" href="/" style={{color:"wheat"}}>Home</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="/contact" style={{color:"wheat"}}>Contact</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="/about" style={{color:"wheat"}}>About</a>
   </li>
 </ul>
</div>
<form class="d-flex" >
      
      <h3> <a href="/"> login</a></h3>
    </form>
</div>


</nav>
    </div>
  )
}

export default Navbar