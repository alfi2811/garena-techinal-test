import React from 'react'
// import imgLogo from '../Modules/Images/logo.png';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [showHamburgerMenu, setShowHamburgerMenu] = React.useState(false)
    const onClick = () => showHamburgerMenu ? setShowHamburgerMenu(false) : setShowHamburgerMenu(true)
    return (
        <header>
            {/* <div className="jumbotron">
                <img width="100" alt="complex" src="https://idscholarships.seagroup.com/static/media/Sea-Undergraduate-Logo.f3c382b9.png" />                
            </div>             */}

            <nav id="scrl">
                <div className="icon-menu">
                    {
                        showHamburgerMenu ?
                        <FaTimes size={30} onClick={onClick} />:
                        <FaBars size={30} onClick={onClick} />                    
                    }                    
                </div>  
                <div className="logo">
                    <img alt="complex" src="https://idscholarships.seagroup.com/static/media/Sea-Undergraduate-Logo.f3c382b9.png" />                
                </div>  

                <div class="menu">
                    <ul className={showHamburgerMenu ? 'showing' : ''} id="list-menu">
                        <li className="bg-biru"><Link to="/"> <span> Beranda</span></Link></li>                    
                        <li className="bg-biru"><Link to="/register"> <span> Registrasi</span></Link></li>                        
                        <li className="bg-biru"><Link to="/contact"> <span> Kontak</span></Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
