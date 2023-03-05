import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = ()=>{
    const [open, setOpen] = useState(true);
    const [menuClass, setMenuClass] = useState('');
    const isActive = () =>{
        if(open){
            setOpen(false);
            setMenuClass('open');
        }else{
            setOpen(true);
            setMenuClass('');
        }
    }
    


    
    return(
        <header>
            <nav className="header__nav-bar">
            <h1>Savan Efam</h1>
                <button className={`${menuClass}  header__nav-toggle`} onClick={isActive}>
                    <div className={`header__nav-menu-bar`}></div>
                </button>
                <ul className={`${menuClass} App-header__menu`}> 
                    <Link to="#"><li>Film Photography</li></Link>
                    <Link to="#"><li>Digital Photography</li></Link>
                    <Link to="#"><li>About Me</li></Link>
                    <Link to="#"><li>Inspiration</li></Link>
                    <Link to="#"><li>Contact</li></Link>
                    <div className="social-container">
                        <a href="#" class="social-container" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://twitter.com/MafeNavas_" class="social-container" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://www.instagram.com/savan.efam/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer" class="social-container"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </ul>
        
            </nav>
        </header>
    )
}


export default Header;



