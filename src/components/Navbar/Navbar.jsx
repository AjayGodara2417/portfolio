import React, { useState } from 'react'
import logo from '../../assets/Alogor.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll'
import './navbar.css'
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className="navbarLogo" />
        <div className="navbarMenu">
            <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-50} duration={500} className="navbarMenuList">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="navbarMenuList">About Me</Link>
            <Link activeClass='active' to='myworks' spy={true} smooth={true} offset={-50} duration={500} className="navbarMenuList">Portfolio</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="navbarMenuList">Clients</Link>
        </div>
        <button className="contactMeBtn" onClick={()=> {
          document.getElementById('contactPage').scrollIntoView({behavior: "smooth"});
        }}>
            <img src={contactImg} alt="" className="contactMeImg" />Contact Me
        </button>

        <img src={menu} alt="menu" className="mobileMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About Me</Link>
            <Link activeClass='active' to='myworks' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
      </nav>
  );
}

export default Navbar
