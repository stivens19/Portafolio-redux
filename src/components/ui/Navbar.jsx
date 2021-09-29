import React, { useState } from 'react';
import MenuList from './complements/MenuList';
import { animateScroll as scroll } from "react-scroll";
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [menu, setMenu] = useState(false)
    const handleMenu=()=>{
        setMenu(!menu);
    }
    const changeMenu=()=>{
        if(window.scrollY > 20){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeMenu)
    return (
        <nav className={`navbar__container ${navbar && 'p-fixed'}`}>
            <div className="navbar__logo animate__animated animate__fadeIn">
                <span className="navbar__logo-item">{'<SE />'}</span>
                <span className="navbar__button pointer" onClick={handleMenu}><i className="fas fa-bars"></i></span>
            </div>
            <MenuList menu={menu} />
            {
                navbar && <div className="float-button pointer animate__animated animate__bounceIn" onClick={()=>scroll.scrollToTop()}>
                <i className="fas fa-chevron-up"></i>
           </div>
            }

        </nav>
    );
}

export default Navbar;
