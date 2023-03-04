import "./header.css";
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
                    <li>Film Photography</li>
                    <li>Digital Photography</li>
                    <li>About Me</li>
                    <li>Inspiration</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;



