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
                    
                </ul>
        
            </nav>
        </header>
    )
}


export default Header;



