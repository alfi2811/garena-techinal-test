import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [showHamburgerMenu, setShowHamburgerMenu] = React.useState(false)
    const onClick = () => showHamburgerMenu ? setShowHamburgerMenu(false) : setShowHamburgerMenu(true)
    return (
        <header>
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
                        <li className="bg-biru">
                            <a href="#home">
                                <span> Home</span>
                            </a></li>                    
                        <li className="bg-biru">
                            <a href="#program-sea">
                                <span> Program</span>
                            </a>
                        </li>                        
                        <li className="bg-biru">
                            <a href="#partner-sea">
                                <span> Partner</span>
                            </a>
                        </li>  

                        <li className="bg-biru">
                            <a href="#timeline-sea">
                                <span> Timeline</span>
                            </a>
                        </li>    
                        <li className="bg-biru">
                            <a href="#testi-sea">
                                <span> Testimonial</span>
                            </a>
                        </li>    
                        <li className="bg-biru">
                            <a href="#faq-sea">
                                <span> FAQ</span>
                            </a>
                        </li>    
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
