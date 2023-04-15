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
            <Link to="/"><h1>Savan Efam</h1></Link>
                <button className={`${menuClass}  header__nav-toggle`} onClick={isActive}>
                    <div className={`header__nav-menu-bar`}></div>
                </button>
                <ul className={`${menuClass} App-header__menu`}> 
                    <Link to="/FilmPhotography"><li>Film Photography</li></Link>
                    <Link to="/DigitalPhotography"><li>Digital Photography</li></Link>
                    <Link to="/About"><li>About Savan Efam</li></Link>
                    <Link to="/Contact"><li>Contact</li></Link>
                    
                </ul>
        
            </nav>
        </header>
    )
}


export default Header;



